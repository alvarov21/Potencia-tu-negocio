import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/politica-de-cookies')({
  component: CookiesPolicy,
})

function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 lg:p-16 shadow-card">
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">Política de Cookies</h1>
          <p className="text-xl text-primary font-medium">potenciatunegocio.eu</p>
        </header>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 leading-relaxed">
          <p>
            El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
          </p>
          <p>
            Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
          </p>
          <p>
            La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
          </p>
          <p>
            Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Cookies propias</h3>
          <p>
            Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por <strong className="text-foreground">Potencia tu negocio</strong> para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Cookies de terceros</h3>
          <p>
            Son cookies utilizadas y gestionadas por entidades externas que proporcionan a <strong className="text-foreground">Potencia tu negocio</strong> servicios solicitados por este mismo para mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio Web. Los principales objetivos para los que se utilizan cookies de terceros son la obtención de estadísticas de accesos y analizar la información de la navegación, es decir, cómo interactúa el Usuario con el Sitio Web.
          </p>
          <p>
            La información que se obtiene se refiere, por ejemplo, al número de páginas visitadas, el idioma, el lugar a la que la dirección IP desde el que accede el Usuario, el número de Usuarios que acceden, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de dispositivo desde el que se realiza la visita. Esta información se utiliza para mejorar el Sitio Web, y detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o servicio de óptima calidad. En todo caso, la información se recopila de forma anónima y se elaboran informes de tendencias del Sitio Web sin identificar a usuarios individuales.
          </p>
          <p>
            Puede obtener más información sobre las cookies, la información sobre la privacidad, o consultar la descripción del tipo de cookies que se utiliza, sus principales características, periodo de expiración, etc. en el siguiente enlace:
          </p>
          <div className="bg-background p-4 rounded-xl border border-border inline-block my-2">
            <span className="font-semibold text-foreground">Google Analytics</span>
          </div>
          <p>
            La(s) entidad(es) encargada(s) del suministro de cookies podrá(n) ceder esta información a terceros, siempre y cuando lo exija la ley o sea un tercero el que procese esta información para dichas entidades.
          </p>

          <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Cookies de redes sociales</h3>
          <p>
            <strong className="text-foreground">Potencia tu negocio</strong> incorpora plugins de redes sociales, que permiten acceder a las mismas a partir del Sitio Web. Por esta razón, las cookies de redes sociales pueden almacenarse en el navegador del Usuario. Los titulares de dichas redes sociales disponen de sus propias políticas de protección de datos y de cookies, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad. El Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su caso, del tratamiento de sus datos personales. Únicamente a título informativo se indican a continuación los enlaces en los que se pueden consultar dichas políticas de privacidad y/o de cookies:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
            <li>Facebook: <a className="text-primary hover:underline" href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/policies/cookies/</a></li>
            <li>Twitter: <a className="text-primary hover:underline" href="https://twitter.com/es/privacy" target="_blank" rel="noopener noreferrer">https://twitter.com/es/privacy</a></li>
            <li>Instagram: <a className="text-primary hover:underline" href="https://help.instagram.com/1896641480634370?ref=ig" target="_blank" rel="noopener noreferrer">https://help.instagram.com/1896641480634370?ref=ig</a></li>
            <li>YouTube: <a className="text-primary hover:underline" href="https://policies.google.com/privacy?hl=es-419&amp;gl=mx" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=es-419&amp;gl=mx</a></li>
            <li>Pinterest: <a className="text-primary hover:underline" href="https://policy.pinterest.com/es/privacy-policy" target="_blank" rel="noopener noreferrer">https://policy.pinterest.com/es/privacy-policy</a></li>
            <li>LinkedIn: <a className="text-primary hover:underline" href="https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies</a></li>
          </ul>

          <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Deshabilitar, rechazar y eliminar cookies</h3>
          <p>
            El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.
          </p>
          
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs">
              Este documento de Política de Cookies ha sido creado mediante el generador de <a className="text-primary hover:underline" href="https://textos-legales.edgartamarit.com/" target="_blank" rel="noopener noreferrer">plantilla de política de cookies web gratis</a> online el día 30/06/2026.
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
