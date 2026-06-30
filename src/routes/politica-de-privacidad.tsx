import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/politica-de-privacidad')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 lg:p-16 shadow-card">
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">Política de Privacidad del Sitio Web</h1>
          <p className="text-xl text-primary font-medium">potenciatunegocio.eu</p>
        </header>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 leading-relaxed">
          <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h3>
          <p>
            Respetando lo establecido en la legislación vigente, <strong className="text-foreground">Potencia tu negocio</strong> (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.
          </p>
          
          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Leyes que incorpora esta política de privacidad</h4>
          <p>
            Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-primary">
            <li>El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).</li>
            <li>La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).</li>
            <li>El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).</li>
            <li>La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</li>
          </ul>



          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Registro de Datos de Carácter Personal</h4>
          <p>
            En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por <strong className="text-foreground">Potencia tu negocio</strong>, mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre <strong className="text-foreground">Potencia tu negocio</strong> y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.
          </p>

          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Principios aplicables al tratamiento de los datos personales</h4>
          <p>
            El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-primary">
            <li><strong>Principio de licitud, lealtad y transparencia:</strong> se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.</li>
            <li><strong>Principio de limitación de la finalidad:</strong> los datos personales serán recogidos con fines determinados, explícitos y legítimos.</li>
            <li><strong>Principio de minimización de datos:</strong> los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.</li>
            <li><strong>Principio de exactitud:</strong> los datos personales deben ser exactos y estar siempre actualizados.</li>
            <li><strong>Principio de limitación del plazo de conservación:</strong> los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.</li>
            <li><strong>Principio de integridad y confidencialidad:</strong> los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.</li>
            <li><strong>Principio de responsabilidad proactiva:</strong> el Responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.</li>
          </ul>

          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Categorías de datos personales</h4>
          <p>
            Las categorías de datos que se tratan en <strong className="text-foreground">Potencia tu negocio</strong> son únicamente datos identificativos. En ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD.
          </p>

          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Base legal para el tratamiento de los datos personales</h4>
          <p>
            La base legal para el tratamiento de los datos personales es el consentimiento. <strong className="text-foreground">Potencia tu negocio</strong> se compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos.
          </p>
          <p>
            El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del Sitio Web.
          </p>
          <p>
            En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para realizar consultas, solicitar información o por motivos relacionados con el contenido del Sitio Web, se le informará en caso de que la cumplimentación de alguno de ellos sea obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la operación realizada.
          </p>

          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Fines del tratamiento a que se destinan los datos personales</h4>
          <p>
            Los datos personales son recabados y gestionados por <strong className="text-foreground">Potencia tu negocio</strong> con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o consulta.
          </p>
          <p>
            Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del objeto social de <strong className="text-foreground">Potencia tu negocio</strong>, así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web.
          </p>
          <p>
            En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin o fines específicos del tratamiento a que se destinarán los datos personales; es decir, del uso o usos que se dará a la información recopilada.
          </p>

          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Períodos de retención de los datos personales</h4>
          <p>
            Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, únicamente durante el siguiente plazo: <span className="text-primary">12 meses</span>, o hasta que el Usuario solicite su supresión.
          </p>
          <p>
            En el momento en que se obtengan los datos personales, se informará al Usuario acerca del plazo durante el cual se conservarán los datos personales o, cuando eso no sea posible, los criterios utilizados para determinar este plazo.
          </p>

          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Destinatarios de los datos personales</h4>
          <p>
            Los datos personales del Usuario serán compartidos con los siguientes destinatarios o categorías de destinatarios:
          </p>
          <div className="bg-background p-4 rounded-xl border border-border inline-block my-2">
            <span className="font-semibold text-foreground">Hostinger</span>
          </div>
          <p>
            En caso de que el Responsable del tratamiento tenga la intención de transferir datos personales a un tercer país u organización internacional, en el momento en que se obtengan los datos personales, se informará al Usuario acerca del tercer país u organización internacional al cual se tiene la intención de transferir los datos, así como de la existencia o ausencia de una decisión de adecuación de la Comisión.
          </p>

          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Datos personales de menores de edad</h4>
          <p>
            Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita por <strong className="text-foreground">Potencia tu negocio</strong>. Si se trata de un menor de 14 años, será necesario el consentimiento de los padres o tutores para el tratamiento, y este solo se considerará lícito en la medida en la que los mismos lo hayan autorizado.
          </p>

          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Secreto y seguridad de los datos personales</h4>
          <p>
            <strong className="text-foreground">Potencia tu negocio</strong> se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.
          </p>
          <p>
            El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos personales se transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el Usuario, y en retroalimentación, totalmente cifrada o encriptada.
          </p>
          <p>
            Sin embargo, debido a que <strong className="text-foreground">Potencia tu negocio</strong> no puede garantizar la inexpugnabilidad de internet ni la ausencia total de hackers u otros que accedan de modo fraudulento a los datos personales, el Responsable del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las personas físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por violación de la seguridad de los datos personales toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.
          </p>
          <p>
            Los datos personales serán tratados como confidenciales por el Responsable del tratamiento, quien se compromete a informar de y a garantizar por medio de una obligación legal o contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual le haga accesible la información.
          </p>

          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Derechos derivados del tratamiento de los datos personales</h4>
          <p>
            El Usuario tiene sobre <strong className="text-foreground">Potencia tu negocio</strong> y podrá, por tanto, ejercer frente al Responsable del tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-primary">
            <li><i>Derecho de acceso:</i> Es el derecho del Usuario a obtener confirmación de si <strong className="text-foreground">Potencia tu negocio</strong> está tratando o no sus datos personales y, en caso afirmativo, obtener información sobre sus datos concretos de carácter personal y del tratamiento que <strong className="text-foreground">Potencia tu negocio</strong> haya realizado o realice, así como, entre otra, de la información disponible sobre el origen de dichos datos y los destinatarios de las comunicaciones realizadas o previstas de los mismos.</li>
            <li><i>Derecho de rectificación:</i> Es el derecho del Usuario a que se modifiquen sus datos personales que resulten ser inexactos o, teniendo en cuenta los fines del tratamiento, incompletos.</li>
            <li><i>Derecho de supresión ("el derecho al olvido"):</i> Es el derecho del Usuario, siempre que la legislación vigente no establezca lo contrario, a obtener la supresión de sus datos personales cuando estos ya no sean necesarios para los fines para los cuales fueron recogidos o tratados; el Usuario haya retirado su consentimiento al tratamiento y este no cuente con otra base legal; el Usuario se oponga al tratamiento y no exista otro motivo legítimo para continuar con el mismo; los datos personales hayan sido tratados ilícitamente; los datos personales deban suprimirse en cumplimiento de una obligación legal; o los datos personales hayan sido obtenidos producto de una oferta directa de servicios de la sociedad de la información a un menor de 14 años.</li>
            <li><i>Derecho a la limitación del tratamiento:</i> Es el derecho del Usuario a limitar el tratamiento de sus datos personales. El Usuario tiene derecho a obtener la limitación del tratamiento cuando impugne la exactitud de sus datos personales; el tratamiento sea ilícito; el Responsable del tratamiento ya no necesite los datos personales, pero el Usuario lo necesite para hacer reclamaciones; y cuando el Usuario se haya opuesto al tratamiento.</li>
            <li><i>Derecho a la portabilidad de los datos:</i> En caso de que el tratamiento se efectúe por medios automatizados, el Usuario tendrá derecho a recibir del Responsable del tratamiento sus datos personales en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento.</li>
            <li><i>Derecho de oposición:</i> Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos de carácter personal o se cese el tratamiento de los mismos por parte de <strong className="text-foreground">Potencia tu negocio</strong>.</li>
            <li><i>Derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles:</i> Es el derecho del Usuario a no ser objeto de una decisión individualizada basada únicamente en el tratamiento automatizado de sus datos personales, incluida la elaboración de perfiles, existente salvo que la legislación vigente establezca lo contrario.</li>
          </ul>
          <p>
            Así pues, el Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al Responsable del tratamiento con la referencia "RGPD-<strong className="text-foreground">potenciatunegocio.eu</strong>", especificando:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-primary">
            <li>Nombre, apellidos del Usuario y copia del DNI. En los casos en que se admita la representación, será también necesaria la identificación por el mismo medio de la persona que representa al Usuario, así como el documento acreditativo de la representación. La fotocopia del DNI podrá ser sustituida, por cualquier otro medio válido en derecho que acredite la identidad.</li>
            <li>Petición con los motivos específicos de la solicitud o información a la que se quiere acceder.</li>
            <li>Domicilio a efecto de notificaciones.</li>
            <li>Fecha y firma del solicitante.</li>
            <li>Todo documento que acredite la petición que formula.</li>
          </ul>


          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Enlaces a sitios web de terceros</h4>
          <p>
            El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de <strong className="text-foreground">Potencia tu negocio</strong>, y que por tanto no son operados por <strong className="text-foreground">Potencia tu negocio</strong>. Los titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad.
          </p>

          <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">Reclamaciones ante la autoridad de control</h4>
          <p>
            En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente en la forma en la que se están tratando sus datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una reclamación ante una autoridad de control, en particular, en el Estado en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad de control es la Agencia Española de Protección de Datos (<a className="text-primary hover:underline" href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer">https://www.aepd.es/</a>).
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h3>
          <p>
            Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo.
          </p>
          <p>
            <strong className="text-foreground">Potencia tu negocio</strong> se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no serán notificados de forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de los últimos cambios o actualizaciones.
          </p>
          <p>
            Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.
          </p>
          
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs">
              Este documento de Política de Privacidad de un sitio web ha sido creado mediante el generador de <a className="text-primary hover:underline" href="https://textos-legales.edgartamarit.com/" target="_blank" rel="noopener noreferrer">plantilla de política de privacidad web gratis</a> online el día 30/06/2026.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
