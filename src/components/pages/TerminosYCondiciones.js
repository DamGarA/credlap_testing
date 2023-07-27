import "./TerminosYCondiciones.css";
import { useEffect } from "react";
import { insertChatBot, deleteChatBot } from "../../services/ChatbotService";

export default function TerminosYCondiciones() {
  useEffect(() => {
    insertChatBot("https://go.botmaker.com/rest/webchat/p/GJ2BGG62Q0/init.js");

    return () => {
      deleteChatBot();
    };
  }, []);
  return (
    <div className="tyc-container">
      <p className="tyc-titulo">Términos y condiciones</p>
      <div className="tyc-texto">
        Las presentes condiciones generales regulan los términos y condiciones
        de acceso y uso de la página web www.credlap.com, que el usuario del
        sitio deberá de leer y aceptar para usar todos los servicios e
        información que se facilitan desde el mismo. El mero acceso y/o
        utilización del sitio web y de todos o parte de sus contenidos y/o
        servicios requerirá, en forma previa, la aceptación de las presentes
        condiciones generales de uso; es decir, este documento contiene los
        términos y condiciones generales y particulares (en adelante, los
        “Términos y Condiciones”) que rigen el acceso al sitio www.credlap.com
        (en adelante la “web”) y la utilización de cualquiera de los productos o
        servicios disponibles o accesibles a través de la web. Se incluyen,
        además, las condiciones complementarias y subsidiarias determinadas por
        la empresa CREDLAP e informadas a los usuarios a través de la web,
        debiendo también respetarse todas las demás leyes, decretos o
        reglamentaciones nacionales o internacionales aplicables a la materia y
        a la política de privacidad que forma parte del presente. Por tanto, se
        requerirá de los usuarios, meros u ocasionales visitantes y/o a
        cualquiera que de manera directa o indirecta desee utilizar los
        servicios de CREDLAP para sí o en representación de un tercero, la
        aceptación de los presentes términos y condiciones y de la Política de
        Privacidad, las cuáles manifiesta haber leído en forma previa a su
        aceptación. El usuario que NO ACEPTE los Términos y Condiciones deberá
        abstenerse de ingresar a la web y/o utilizar los servicios ofrecidos. El
        usuario, o el mero visitante, reconoce y acepta que en los Términos y
        Condiciones se establecen las reglas de un contrato bilateral que se
        concertará mediante el uso, por parte de los contratantes, de
        comunicaciones y mensajes recíprocos, a través de las herramientas de
        comunicación provistas por CREDLAP, en el que prevalecerán, como
        principios rectores y esenciales, la buena fe y el deber de colaboración
        mutua entre el usuario y CREDLAP. El acceso a www.credlap.com sólo está
        disponible para las personas físicas mayores de dieciocho (18) años y
        que cuentan con capacidad legal para contratar. También, está disponible
        para personas jurídicas debidamente inscriptas, que se encuentren en
        actividad y que cuenten con Clave Única de Identificación Tributaria -
        CUIT. Se exige, además, que el usuario sea titular de una cuenta
        bancaria abierta y activa en alguna entidad financiera supervisada por
        el Banco Central de la República Argentina. No podrán operar los menores
        de edad y/o las personas temporal o definitivamente inhabilitadas para
        contratar. Tampoco aquellas personas jurídicas circunstancialmente
        inhabilitadas por la causa que fuera. CREDLAP, no revelará ni compartirá
        la información suministrada por el usuario con ninguna otra persona
        física o jurídica sin el consentimiento informado del usuario que
        proporciona dicha información, salvo que así lo requiera la ley o la
        autoridad administrativa y/o judicial competente. CREDLAP, salvo
        indicación expresa en contrario por el usuario, podrán utilizar los
        datos suministrados para enviar información sobre CREDLAP, especialmente
        información o mensajes sobre promociones, nuevas funcionalidades y
        nuevos servicios que sean de interés para el usuario. El Portal podría
        suministrar información del usuario a entidades que intervengan en la
        resolución de alguna disputa entre las partes, tales como: compañías de
        seguros, tribunales competentes, amigables componedores o tribunales de
        arbitraje. La web recomienda expresamente al usuario la previa lectura
        de los términos de uso y políticas de cualquier sitio enlazado. CREDLAP
        podrá, suspender o inhabilitar definitivamente al usuario para que
        utilice los servicios con cualquier otro fin distinto al previsto,
        renunciando expresamente el usuario a todo reclamo a consecuencia de tal
        suspensión o inhabilitación temporal o definitiva. CREDLAP no serán
        responsables por intercepciones ilegales o violación de sus sistemas o
        bases de datos por parte de personas no autorizadas, así como por la
        indebida utilización de la información obtenida por esos medios. El
        usuario tiene la facultad de ejercer el derecho de acceso a sus datos
        personales, almacenados, en forma gratuita y a intervalos no inferiores
        a seis (6) meses, salvo que acredite un interés legítimo al efecto,
        conforme lo establecido en el artículo 14 inciso 3 de la Ley N° 25.326.
        LA DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, Órgano de
        Control de la Ley N° 25.326, tiene la atribución de atender las
        denuncias y reclamos que se interpongan con relación al incumplimiento
        de las normas sobre protección de datos personales. En el caso que
        CREDLAP decida cambiar la política sobre privacidad lo realizará en la
        web de manera directa sin la necesidad de aviso previo. Sin perjuicio de
        lo expuesto, el usuario autoriza expresamente a CREDLAP a corroborar la
        veracidad y vigencia de los datos brindados ante quiénes CREDLAP estime
        menester. Ello incluye, además, qué CREDLAP le requiera la confirmación
        de uno, unos o de todos sus datos cuando CREDLAP lo crea necesario.
        Asimismo, CREDLAP podrá requerir al usuario cualquier otro dato
        adicional que considere necesario a efectos de corroborar y/o confirmar
        y/o verificar sus datos personales, sin perjuicio de la facultad de dar
        de baja al usuario en forma temporal o definitiva, de así considerarlo,
        sin que ello genere derecho alguno al usuario. CREDLAP, atento su
        responsabilidad y actividad empresarial, informa al usuario que el uso
        la web es de acceso voluntario por él, sujeto a los Términos y
        Condiciones y la Política de Privacidad, y para el uso y/o goce de los
        servicios, información o entretenimientos que la web contenga y brinde.
        CREDLAP deja claramente establecido que no asumen ningún tipo de
        responsabilidad por la publicidad de terceros que contenga la web, ni
        serán responsables por las vinculaciones que el usuario establezca con
        ellos y/o con otros usuarios, ni serán responsables por las eventuales
        consecuencias, de cualquier tipo que fuera, resultantes de fallas en el
        sistema, en el servidor o en Internet, que pudieran surgir del acceso
        y/o uso de la web bajo cualquier modalidad que el usuario emplea, ni
        serán responsables por eventuales errores u omisiones contenidos en la
        web. CREDLAP no garantiza el acceso irrestricto y/o uso continuado o
        ininterrumpido al sistema de la web. Ello, toda vez que el sistema
        puede, ocasionalmente, no encontrarse disponible para su uso, con motivo
        de fallas propias de los servidores, dificultades técnicas, hechos de
        terceros ajenos a CREDLAP o fallas propias del sistema Internet. No
        obstante ello, CREDLAP asume el compromiso de realizar sus mejores
        esfuerzos para procurar restablecer el sistema con la mayor celeridad
        posible, sin que por ello pueda imputarse algún tipo de responsabilidad.
        Todos y cada uno de los programas, bases de datos, redes y archivos que
        permiten al usuario acceder y usar la web de propiedad exclusiva de
        CREDLAP y están protegidas por las leyes locales, resoluciones
        administrativas, y los tratados internacionales de derecho de autor,
        marcas, patentes, modelos y diseños industriales y/o demás normativa que
        en el futuro se reglamente en la materia. El uso indebido y la
        reproducción total o parcial de dichos contenidos quedan prohibidos,
        salvo autorización expresa y por escrito de CREDLAP, previo pedido por
        parte del usuario. El usuario presta su consentimiento para que CREDLAP,
        a través la web, pueda emplear los datos aportados por el usuario para
        enviar información y/o promociones y/o publicidad asociada la web y sus
        servicios. El usuario, luego de ingresar la web, podrá solicitar a
        CREDLAP, en todo momento, el otorgamiento de una asistencia en dinero
        indicando: a) el monto requerido; b) el plazo y forma de devolución
        sugerida; c) la cuenta bancaria identificada por su CBU (Clave Bancaria
        Única) en la que se acreditará CREDLAP, una vez recibida la solicitud y
        en el plazo de días hábiles que considere necesario, comunicará al
        usuario: a) el monto de asistencia susceptible de ser acordado; b) forma
        de la devolución de la asistencia –fechas de pagos e importes, que ya
        incluirán el cálculo de los intereses-; y c) el número de cuenta
        bancaria (identificada por su CBU) en la que acreditará la asistencia y
        dónde deberán ser depositadas las devoluciones convenidas. En igual
        plazo, CREDLAP comunicará al usuario, de ser el caso, el rechazo de la
        solicitud. De así considerarlo, el usuario, una vez recibida la
        propuesta de asistencia, comunicará a CREDLAP, a través de la web y de
        acuerdo al procedimiento indicado, la aceptación de dicha propuesta, la
        cual implica su conformidad con los términos acordados. La aceptación de
        la propuesta obligará a CREDLAP a liquidar, en un plazo no mayor a 96
        horas hábiles, la asistencia en las condiciones detalladas en la
        propuesta de asistencia e implica, de pleno derecho, el consentimiento
        del usuario a que se debite automáticamente, de la cuenta bancaria
        correspondiente, si es que corresponde, el monto acordado por concepto
        de devolución de la asistencia. El usuario es el único responsable por
        la existencia de fondos suficientes, de acuerdo a lo determinado en la
        aceptación, obligándose a mantener saldo disponible en la cuenta. La
        existencia de una garantía no autoriza al usuario a no cumplir con ello.
        La obligación subsiste hasta la cancelación total de la asistencia. El
        usuario, al comunicar la aceptación de la propuesta de asistencia,
        reconoce y acepta que deberá a CREDLAP la suma que esté indicada en el
        acuerdo, incluidos los intereses y comisiones, prestando conformidad con
        todos y cada uno de los cobros que lleve a cabo CREDLAP. El usuario
        presta expresa conformidad con la realización de todos y cada uno de los
        débitos de su cuenta bancaria designada, hasta tanto se cancele la
        totalidad de la asistencia aceptada en caso de ser necesario utilizar el
        medio de cobro nombrado. Ante el incumplimiento parcial o total de
        cualquier cuota por parte del usuario, opera de pleno derecho a favor de
        CREDLAP, podrá reclamar los totales de las deudas y sin necesidad de
        interpelación judicial o extrajudicial alguna, la aplicación de los
        intereses, moras y penalidades correspondientes, según lo indicado en el
        contrato de asistencia. Se faculta al usuario a revocar su aceptación de
        la propuesta de asistencia dentro de los diez días computados a partir
        de la aceptación de la misma. Para efectuar su derecho de revocación, el
        usuario deberá notificar a CREDLAP su decisión, por escrito o medios
        electrónicos o similares, o mediante la devolución del dinero dentro del
        plazo de diez días; en cuyo caso se deberán abonar los intereses y
        gastos en caso de corresponder. Para el caso que el usuario revoque la
        asistencia, CREDLAP se obliga a dar inmediata aviso a la entidad
        bancaria de ello y a no debitar suma alguna de las cuentas del usuario,
        en la medida que éste haya restituido el importe requerido más los
        intereses correspondientes. Transcurridos los diez días calendarios, la
        aceptación de la propuesta de asistencia será irrevocable luego de la
        firma del contrato digital. En todo momento, CREDLAP cumplirá con las
        normas fiscales vigentes en la República Argentina, a cuyos fines
        procederá a emitir las facturas que correspondan. Todas las
        notificaciones o comunicaciones que se remitan a la casilla de correo
        electrónico del usuario serán válidas y vinculantes. El usuario ha
        tomado pleno conocimiento de los términos y condiciones antes descritos,
        como, asimismo, de la política de privacidad. Los ha leído, y cuenta con
        copia de ellos a su disposición, pudiendo guardarla en su ordenador,
        imprimirlos o retirar copia firmada por CREDLAP en el domicilio especial
        fijado por la misma.
        <br></br>
        <br></br>
        <p>
          Responsable de seguridad de datos: Cativa Florencia, asesor externo.
          E-mail: consultas@credlap.com, Tel: +54 9 11 3404 4836.
        </p>
        <p>
          Responsable de régimen informativo: Medina Wanda, asesor externo.
          E-mail: administracion@credlap.com, Tel: +54 9 11 7831 2678.
        </p>
        <p>
          Responsable de atención al usuario financiero: Ortega Lina, asesor
          externo. E-mail: administracion@credlap.com, Tel: +54 9 11 7831 2678.
        </p>
        <p>
          Responsable suplente de atención al usuario financiero: Palaia
          Mariana, asesor externo. E-mail: administracion@credlap.com, Tel: +54
          9 11 7831 2677.
        </p>
        <p>
          Directorio responsable PUSF: Cella Yesica Mailen, Director Suplente.
          E-mail: jesica@credlap.com, Tel: +54 9 221 635 4562.
        </p>
      </div>
    </div>
  );
}
