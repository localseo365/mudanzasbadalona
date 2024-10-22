import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MudanzasBadalona",
    "description": "Servicios de mudanza profesionales en Badalona y alrededores. Ofrecemos mudanzas residenciales, comerciales, embalaje y almacenaje.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Badalona",
      "addressRegion": "Barcelona",
      "addressCountry": "ES"
    },
    "telephone": "+34690220944",
    "openingHours": "Mo-Fr 08:00-20:00, Sa 09:00-14:00"
  };

  return (
    <Helmet>
      <title>MudanzasBadalona - Servicios de Mudanza Profesionales en Badalona</title>
      <meta name="description" content="Expertos en mudanzas residenciales y comerciales en Badalona. Servicios de embalaje, transporte y almacenaje. Solicita presupuesto gratuito." />
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

export default SEO;