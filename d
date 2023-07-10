[1mdiff --git a/public/textos.js b/public/textos.js[m
[1mindex 9bcb662..7f85453 100644[m
[1m--- a/public/textos.js[m
[1m+++ b/public/textos.js[m
[36m@@ -1,5 +1,42 @@[m
 window.home = {[m
[31m-	monto: "$60.000"[m
[32m+[m	[32mmonto: "$60.000",[m
[32m+[m	[32mopinion1: {[m
[32m+[m		[32mtexto: "Excelente atención. Mucha empatía de los asesores.",[m
[32m+[m		[32mautor: "Maria Gomez",[m
[32m+[m		[32mlugar: "Caballito, Buenos Aires"},[m
[32m+[m	[32mopinion2: {[m
[32m+[m		[32mtexto: "Ningún problema. Todo muy simple y claro.",[m
[32m+[m		[32mautor: "Carlos Rodriguez",[m
[32m+[m		[32mlugar: "Morón, Buenos Aires"},[m
[32m+[m	[32mopinion3: {[m
[32m+[m		[32mtexto: "TEXTO DE LA OPINIÓN",[m
[32m+[m		[32mautor: "AUTOR DE LA OPINIÓN",[m
[32m+[m		[32mlugar: "LOCALIDAD DEL OPINANTE"},[m
[32m+[m	[32mopinion4: {[m
[32m+[m		[32mtexto: "TEXTO DE LA OPINIÓN",[m
[32m+[m		[32mautor: "AUTOR DE LA OPINIÓN",[m
[32m+[m		[32mlugar: "LOCALIDAD DEL OPINANTE"},[m
[32m+[m	[32mopinion5: {[m
[32m+[m		[32mtexto: "TEXTO DE LA OPINIÓN",[m
[32m+[m		[32mautor: "AUTOR DE LA OPINIÓN",[m
[32m+[m		[32mlugar: "LOCALIDAD DEL OPINANTE"},[m
[32m+[m	[32mopinion6: {[m
[32m+[m		[32mtexto: "TEXTO DE LA OPINIÓN",[m
[32m+[m		[32mautor: "AUTOR DE LA OPINIÓN",[m
[32m+[m		[32mlugar: "LOCALIDAD DEL OPINANTE"},[m
[32m+[m[32m}[m
[32m+[m[32mwindow.footer = {[m
[32m+[m	[32mwsp: "5492215612675",[m
[32m+[m	[32mcondiciones: {[m
[32m+[m		[32mmontomin: "$1.000",[m
[32m+[m		[32mmontomax: "$60.000"[m
[32m+[m	[32m}[m
[32m+[m[32m}[m
[32m+[m[32mwindow.flotante = {[m
[32m+[m	[32mwsp: "5492215612675"[m
[32m+[m[32m}[m
[32m+[m[32mwindow.contacto = {[m
[32m+[m	[32mwsp: "5492215612675"[m
 }[m
 window.pagatucuota = {[m
 	wsp: "5491145638718"[m
[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex 6084b05..13ca5fa 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -73,7 +73,7 @@[m [mfunction App() {[m
             <video width={800} id="webcam" autoPlay="autoplay" hidden={true} />[m
           </div>[m
         </div>[m
[31m-        <Link to={'//api.whatsapp.com/send?phone=5492215612675'} className='img-wp' target='_blank'>[m
[32m+[m[32m        <Link to={'//api.whatsapp.com/send?phone='+window.flotante.wsp} className='img-wp' target='_blank'>[m
           <img src={imgWp} />[m
         </Link>[m
       </Wrapper>[m
[1mdiff --git a/src/components/Footer.js b/src/components/Footer.js[m
[1mindex 11b722f..ddcd7c4 100644[m
[1m--- a/src/components/Footer.js[m
[1m+++ b/src/components/Footer.js[m
[36m@@ -23,7 +23,7 @@[m [mexport default function Footer() {[m
                         <div className='social'>[m
                             <Link to={'//www.facebook.com/credlap/'} className='social-link' target='_blank'><FontAwesomeIcon icon={brands('facebook-f')} /></Link>[m
                             <Link to={'//www.instagram.com/credlap/'} className='social-link' target='_blank'><FontAwesomeIcon icon={brands('instagram')} /></Link>[m
[31m-                            <Link to={'//api.whatsapp.com/send?phone=5492215612675'} className='social-link' target='_blank'><FontAwesomeIcon icon={brands('whatsapp')} /></Link>[m
[32m+[m[32m                            <Link to={'//api.whatsapp.com/send?phone='+window.footer.wsp} className='social-link' target='_blank'><FontAwesomeIcon icon={brands('whatsapp')} /></Link>[m
                         </div>[m
                         <div class='footer-mail'>[m
                             <a href='mailto:consultas@credlap.com'>consultas@credlap.com</a>[m
[36m@@ -94,7 +94,7 @@[m [mexport default function Footer() {[m
                     <p>Condiciones generales de préstamos y ayudas económicas: La Tasa Nominal Anual (TNA), la Tasa Efectiva Anual (TEA) y el Costo Financiero Total Nominal Anual (CFTNA) varían según el perfil crediticio del solicitante del préstamo y plazo de financiación elegido. En todos los casos, la TNA, TEA y el CFT aplicable serán informados al momento de ingresar la solicitud del préstamo y antes de su otorgamiento.</p>[m
                     <p>Tasa Nominal Anual (TNA) sin IVA: Mínimo: 71,26% - Máximo: 225,83% | Costo Financiero Total Nominal Anual (CFTNA) con IVA: Mínimo: 129,95% - Máximo: 1072.62%.</p>[m
                     <p>Ejemplo de préstamo: Monto solicitado de $10.000 a 12 meses | Cuota: $1.551,87 | Total a pagar: $18.622,46 (ejemplo sobre TNA S/IVA) ("Las tasas varían según riesgo crediticio de cada cliente, el ejemplo es una de las líneas vigentes de la compañía (CREDLAP GOLD) ").</p>[m
[31m-                    <p>El plazo mínimo de repago del préstamo es de 1 meses y el máximo de 24 meses. Cuotas mensuales, iguales y consecutivas ‘calculadas mediante el sistema de cuotas directa, que el cliente abonará mensualmente de manera voluntaria. El monto mínimo de financiación es de $1.000 y el monto máximo de $60.000.</p>[m
[32m+[m[32m                    <p>El plazo mínimo de repago del préstamo es de 1 meses y el máximo de 24 meses. Cuotas mensuales, iguales y consecutivas ‘calculadas mediante el sistema de cuotas directa, que el cliente abonará mensualmente de manera voluntaria. El monto mínimo de financiación es de {window.footer.condiciones.montomin} y el monto máximo de {window.footer.condiciones.montomax}.</p>[m
                     <p>El otorgamiento del préstamo está sujeto a evaluación crediticia de cada cliente.</p>[m
                     <p>La empresa declara: al momento del otorgamiento de cada servicio, con la firma  presencial o digital de la documentación, el cliente acepta nuestros términos y condiciones estipulados en www.wamafego.com / www.credlap.com. La empresa no cobra ningún tipo de gasto por adelantado y la cuota del préstamo incluye todos los gastos administrativos finales, salvo en el caso de retrasos de pago, donde se aplicaran los punitorios diarios estipulados.</p>[m
                     <p>Wamafego S.A Cuit 30-71633158-6.</p>[m
[1mdiff --git a/src/components/pages/Contacto.js b/src/components/pages/Contacto.js[m
[1mindex 3535edb..706300c 100644[m
[1m--- a/src/components/pages/Contacto.js[m
[1m+++ b/src/components/pages/Contacto.js[m
[36m@@ -142,7 +142,7 @@[m [mexport default function Contacto() {[m
         <div className='contacto-right-box'>[m
             <div className='contacto-checks'>[m
                 <Link[m
[31m-                  to={'//api.whatsapp.com/send?phone=5492215612675'}[m
[32m+[m[32m                  to={'//api.whatsapp.com/send?phone='+window.contacto.wsp}[m
                   className='contacto-btn hablar'[m
                   target={'_blank'}>[m
                   <FontAwesomeIcon icon={brands('whatsapp')} className='contacto-btn-icon'/>[m
[1mdiff --git a/src/components/pages/Home.js b/src/components/pages/Home.js[m
[1mindex 5a8b290..8ec7008 100644[m
[1m--- a/src/components/pages/Home.js[m
[1m+++ b/src/components/pages/Home.js[m
[36m@@ -104,27 +104,27 @@[m [mexport default function Home() {[m
         >[m
             <Opinion[m
               estrellas={5}[m
[31m-              label='"Excelente atención. Mucha empatía de los asesores."'[m
[31m-              autor='María Gomez'[m
[31m-              lugar='Caballito, Buenos Aires'[m
[32m+[m[32m              label={window.home.opinion1.texto}[m
[32m+[m[32m              autor={window.home.opinion1.autor}[m
[32m+[m[32m              lugar={window.home.opinion1.lugar}[m
             />[m
             <Opinion[m
               estrellas={5}[m
[31m-              label='"Ningún problema. Todo muy simple y claro."'[m
[31m-              autor='Carlos Rodriguez'[m
[31m-              lugar='Morón, Buenos Aires'[m
[32m+[m[32m              label={window.home.opinion2.texto}[m
[32m+[m[32m              autor={window.home.opinion2.autor}[m
[32m+[m[32m              lugar={window.home.opinion2.lugar}[m
             />[m
             <Opinion[m
               estrellas={5}[m
[31m-              label='"Excelente atención. Mucha empatía de los asesores."'[m
[31m-              autor='María Gomez'[m
[31m-              lugar='Caballito, Buenos Aires'[m
[32m+[m[32m              label={window.home.opinion1.texto}[m
[32m+[m[32m              autor={window.home.opinion1.autor}[m
[32m+[m[32m              lugar={window.home.opinion1.lugar}[m
             />[m
             <Opinion[m
               estrellas={5}[m
[31m-              label='"Ningún problema. Todo muy rápido, simple y claro."'[m
[31m-              autor='Carlos Rodriguez'[m
[31m-              lugar='Morón, Buenos Aires'[m
[32m+[m[32m              label={window.home.opinion2.texto}[m
[32m+[m[32m              autor={window.home.opinion2.autor}[m
[32m+[m[32m              lugar={window.home.opinion2.lugar}[m
             />[m
         </Carousel>[m
       </div>[m
