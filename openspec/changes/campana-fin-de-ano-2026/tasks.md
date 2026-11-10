## 1. Atribución (primero, para medir desde el día 1)

- [x] 1.1 Agregar en `netlify.toml` el redirect 302 de `/promo` a la landing de desarrollo web con `utm_campaign=noviembre_web_2026`, y verificar con `curl -I` que responde 302 con el `Location` correcto
- [x] 1.2 Confirmar que el canonical de la landing no incluye parámetros UTM, revisando el HTML generado con `npm run build`
- [x] 1.3 Entrar por `/promo`, enviar el formulario y pulsar WhatsApp, y verificar en GA4 DebugView que `generate_lead` y `click_whatsapp` quedan asociados a `noviembre_web_2026`
- [x] 1.4 Solo si 1.3 falla, pasar `utm_campaign` en `ContactForm.jsx` y `WhatsAppButton.jsx` y repetir la verificación de 1.3 (No hizo falta: GA4 asocia la campaña desde la URL de la página; verificado en el informe de adquisición.)

## 2. Configuración de la campaña

- [x] 2.1 Crear `src/config/campaign.js` con `active`, cupos restantes, fecha de cierre de contratación, entrega estimada y textos ES/EN, y verificar que `npm run build` pasa
- [x] 2.2 Rellenar en la configuración la fecha de cierre y la entrega estimada con los valores que definas, y verificar que no queden marcadores pendientes (`grep -n "TODO" src/config/campaign.js` sin resultados)
- [x] 2.3 Decidir y escribir qué cubre "analítica incluida" (solo configuración de eventos o también reporte mensual), y verificar que el texto coincide con lo que puedes cumplir

## 3. Bloque en la landing

- [ ] 3.1 Crear el componente del bloque con diagnóstico gratuito, las dos salidas de pago, el cupo restante, las condiciones e impuestos, y el CTA al contacto; verificar visualmente en ES y EN con `npm run dev`
- [x] 3.2 Insertarlo en `ServiceLandingPage.astro` para `/services/desarrollo-web-puebla/` y su versión EN, y verificar que solo aparece con `active: true`
- [x] 3.3 Mostrar el precio "desde $5,000 MXN" y comprobar que coincide con `buildOffers` en `src/lib/schema.js`, sin modificar el schema
- [x] 3.4 Mostrar el estado sin cupos y verificar que, con cupos en cero, el bloque no invita a contratar
- [x] 3.5 Revisar el copy ES/EN y verificar con `grep -rni "buen fin" src/config/campaign.js` que no hay marca oficial en el bloque

## 4. Artículo evergreen

- [x] 4.1 Escribir en `src/content/blog/` el artículo sobre cómo preparar la página web para temporadas de descuentos (experiencia móvil, botones de compra o contacto, catálogo, velocidad, promociones, medición de clics, pruebas de formularios), sin "Buen Fin" ni año en la URL
- [x] 4.2 Enlazar el artículo a desarrollo web, optimización y contacto, y verificar con `npm run build` que los enlaces internos resuelven

## 5. Salida y medición

- [x] 5.1 Ejecutar `npm run build` completo y verificar que no hay errores ni páginas nuevas inesperadas en la lista de rutas
- [x] 5.2 Preparar los mensajes directos para LinkedIn y WhatsApp con el enlace `/promo`, con un tope de 8 a 10 diagnósticos, y dejarlos listos para enviar
- [x] 5.3 Definir una hoja de seguimiento con visitas, contactos, diagnósticos, cotizaciones y proyectos por `utm_campaign`, y verificar que tiene las cinco columnas
- [ ] 5.4 Al cierre de diciembre, apagar la campaña con `active: false` y verificar que la landing queda sin el bloque
