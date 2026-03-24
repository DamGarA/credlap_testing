import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

/**
 * Genera el PDF de autorización/aceptación pre-rellenado con los datos del formulario.
 * Opcionalmente embebe la imagen de firma del usuario.
 *
 * @param {Object} formData - Datos del formulario (nombre, apellido, dni, etc.)
 * @param {string|null} signatureDataUrl - Data URL (base64 PNG) de la firma, o null si no se firma aún.
 * @returns {Promise<Uint8Array>} - Bytes del PDF generado.
 */
export async function generateAuthorizationPdf(formData, signatureDataUrl = null) {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const PAGE_WIDTH = 595;
  const PAGE_HEIGHT = 842;
  const MARGIN = 50;
  const LINE_HEIGHT = 18;
  const GREEN = rgb(0.376, 0.702, 0.314);   // #60b350
  const BLACK = rgb(0, 0, 0);
  const GRAY = rgb(0.3, 0.3, 0.3);

  let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - MARGIN;

  // ── Helper: salto de página ──
  function ensureSpace(needed) {
    if (y - needed < MARGIN + 40) {
      page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      y = PAGE_HEIGHT - MARGIN;
    }
  }

  // ── Helper: texto con wrap ──
  function drawWrappedText(text, x, fontSize, colour, usedFont, maxWidth) {
    const words = text.split(' ');
    let line = '';
    for (const word of words) {
      const testLine = line ? `${line} ${word}` : word;
      const testWidth = usedFont.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > maxWidth && line) {
        ensureSpace(LINE_HEIGHT);
        page.drawText(line, { x, y, size: fontSize, font: usedFont, color: colour });
        y -= LINE_HEIGHT;
        line = word;
      } else {
        line = testLine;
      }
    }
    if (line) {
      ensureSpace(LINE_HEIGHT);
      page.drawText(line, { x, y, size: fontSize, font: usedFont, color: colour });
      y -= LINE_HEIGHT;
    }
  }

  // ══════════════════════════════════════
  // HEADER - Barra verde + título
  // ══════════════════════════════════════
  page.drawRectangle({
    x: 0, y: PAGE_HEIGHT - 60, width: PAGE_WIDTH, height: 60, color: GREEN,
  });
  page.drawText('CREDLAP S.A.', {
    x: MARGIN, y: PAGE_HEIGHT - 40, size: 20, font: fontBold, color: rgb(1, 1, 1),
  });
  page.drawText('Documento de Autorización de Préstamo', {
    x: MARGIN, y: PAGE_HEIGHT - 55, size: 10, font, color: rgb(1, 1, 1),
  });

  y = PAGE_HEIGHT - 90;

  // ══════════════════════════════════════
  // DATOS DEL SOLICITANTE
  // ══════════════════════════════════════
  page.drawText('DATOS DEL SOLICITANTE', {
    x: MARGIN, y, size: 12, font: fontBold, color: GREEN,
  });
  y -= 6;
  page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_WIDTH - MARGIN, y }, thickness: 1, color: GREEN });
  y -= LINE_HEIGHT + 4;

  const fechaHoy = new Date().toLocaleDateString('es-AR', {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  const datosPersonales = [
    ['Fecha', fechaHoy],
    ['Nombre y Apellido', `${formData.nombre || ''} ${formData.apellido || ''}`],
    ['DNI', formData.dni || ''],
    ['Género', formData.genero === 'M' ? 'Masculino' : formData.genero === 'F' ? 'Femenino' : (formData.genero || '')],
    ['Teléfono', formData.telefono || ''],
    ['Email', formData.email || ''],
    ['Provincia', formData.provincia || ''],
    ['Actividad laboral', formData.actividad || ''],
    ['Entidad bancaria', formData.entidadBancaria || ''],
  ];

  for (const [label, value] of datosPersonales) {
    ensureSpace(LINE_HEIGHT);
    page.drawText(`${label}:`, { x: MARGIN, y, size: 10, font: fontBold, color: BLACK });
    page.drawText(value, { x: MARGIN + 130, y, size: 10, font, color: GRAY });
    y -= LINE_HEIGHT;
  }

  y -= 10;

  // ══════════════════════════════════════
  // DATOS DEL PRÉSTAMO
  // ══════════════════════════════════════
  ensureSpace(40);
  page.drawText('DATOS DEL PRÉSTAMO', {
    x: MARGIN, y, size: 12, font: fontBold, color: GREEN,
  });
  y -= 6;
  page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_WIDTH - MARGIN, y }, thickness: 1, color: GREEN });
  y -= LINE_HEIGHT + 4;

  const montoFormateado = formData.monto
    ? `$${Number(formData.monto).toLocaleString('es-AR')}`
    : '$0';

  const datosPrestamo = [
    ['Monto solicitado', montoFormateado],
    ['Cantidad de cuotas', '12'],
    ['Día de pago', '1 de cada mes'],
  ];

  for (const [label, value] of datosPrestamo) {
    ensureSpace(LINE_HEIGHT);
    page.drawText(`${label}:`, { x: MARGIN, y, size: 10, font: fontBold, color: BLACK });
    page.drawText(value, { x: MARGIN + 130, y, size: 10, font, color: GRAY });
    y -= LINE_HEIGHT;
  }

  y -= 10;

  // ══════════════════════════════════════
  // TÉRMINOS Y CONDICIONES
  // ══════════════════════════════════════
  ensureSpace(40);
  page.drawText('TÉRMINOS Y CONDICIONES', {
    x: MARGIN, y, size: 12, font: fontBold, color: GREEN,
  });
  y -= 6;
  page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_WIDTH - MARGIN, y }, thickness: 1, color: GREEN });
  y -= LINE_HEIGHT + 4;

  const terminos = [
    '1. El solicitante autoriza a CREDLAP S.A. a consultar su información crediticia en las bases de datos correspondientes (BCRA, Veraz, Nosis, entre otras).',
    '2. El solicitante declara bajo juramento que los datos proporcionados son verdaderos y completos.',
    '3. La pre-aprobación no constituye una aprobación definitiva del préstamo. CREDLAP S.A. se reserva el derecho de solicitar documentación adicional.',
    '4. En caso de aprobación, el solicitante autoriza el débito automático de las cuotas en la cuenta bancaria declarada.',
    '5. El incumplimiento en el pago de las cuotas generará intereses moratorios según la tasa vigente publicada por CREDLAP S.A.',
    '6. La presente autorización tiene carácter de declaración jurada y se encuentra amparada por la Ley 25.326 de Protección de Datos Personales.',
    '7. La firma digital del presente documento tiene la misma validez legal que la firma ológrafa, conforme a la Ley 25.506 de Firma Digital.',
  ];

  const maxTextWidth = PAGE_WIDTH - MARGIN * 2;
  for (const termino of terminos) {
    ensureSpace(LINE_HEIGHT * 2);
    drawWrappedText(termino, MARGIN, 9, GRAY, font, maxTextWidth);
    y -= 4;
  }

  y -= 15;

  // ══════════════════════════════════════
  // SECCIÓN DE FIRMA
  // ══════════════════════════════════════
  ensureSpace(120);
  page.drawText('FIRMA DEL SOLICITANTE', {
    x: MARGIN, y, size: 12, font: fontBold, color: GREEN,
  });
  y -= 6;
  page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_WIDTH - MARGIN, y }, thickness: 1, color: GREEN });
  y -= 20;

  if (signatureDataUrl) {
    // Embeber la firma como imagen PNG
    const signatureImageBytes = dataUrlToUint8Array(signatureDataUrl);
    const signatureImage = await pdfDoc.embedPng(signatureImageBytes);
    const sigDims = signatureImage.scale(0.5);
    const sigWidth = Math.min(sigDims.width, 250);
    const sigHeight = Math.min(sigDims.height, 80);

    page.drawImage(signatureImage, {
      x: MARGIN + 20,
      y: y - sigHeight,
      width: sigWidth,
      height: sigHeight,
    });
    y -= sigHeight + 10;
  } else {
    // Espacio vacío para firma
    y -= 60;
  }

  // Línea de firma
  page.drawLine({
    start: { x: MARGIN + 20, y },
    end: { x: MARGIN + 280, y },
    thickness: 0.5,
    color: BLACK,
  });
  y -= 14;
  page.drawText(`${formData.nombre || ''} ${formData.apellido || ''} - DNI: ${formData.dni || ''}`, {
    x: MARGIN + 20, y, size: 9, font, color: GRAY,
  });
  y -= LINE_HEIGHT;

  const fechaFirma = new Date().toLocaleDateString('es-AR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
  page.drawText(`Fecha y hora de firma: ${fechaFirma}`, {
    x: MARGIN + 20, y, size: 9, font, color: GRAY,
  });

  // ══════════════════════════════════════
  // PIE DE PÁGINA
  // ══════════════════════════════════════
  const footerY = MARGIN - 10;
  page.drawLine({
    start: { x: MARGIN, y: footerY + 15 },
    end: { x: PAGE_WIDTH - MARGIN, y: footerY + 15 },
    thickness: 0.5,
    color: GREEN,
  });
  page.drawText(
    'CREDLAP S.A. - Entidad financiera regulada por el BCRA | consultas@credlap.com | www.credlap.com',
    { x: MARGIN, y: footerY, size: 7, font, color: GRAY }
  );

  return pdfDoc.save();
}

/**
 * Convierte un data URL (base64) a Uint8Array para embeber en el PDF.
 */
function dataUrlToUint8Array(dataUrl) {
  const base64 = dataUrl.split(',')[1];
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * Genera un Blob descargable del PDF.
 */
export async function generatePdfBlob(formData, signatureDataUrl = null) {
  const pdfBytes = await generateAuthorizationPdf(formData, signatureDataUrl);
  return new Blob([pdfBytes], { type: 'application/pdf' });
}
