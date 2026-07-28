import sgMail from '@sendgrid/mail'

interface ContactBody {
  fullName: string
  email: string
  message: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event)
  const config = useRuntimeConfig()

  // Enforce runtime verification mapping boundaries
  if (!body.fullName || !body.email || body.message.length < 10) {
    throw createError({ statusCode: 400, statusMessage: 'Payload failed data validation rules.' })
  }

  // Provide authorization variables safely out of environment variables (.env file)
  sgMail.setApiKey(config.sendgridApiKey)

  const messagePayload = {
    to: 'target-inbox@yourcompany.com', // Where you want to receive emails
    from: 'verified-sender@yourcompany.com', // Must match your authenticated domain configurations inside SendGrid
    subject: `New Corporate Lead: ${body.fullName}`,
    text: `Sender Name: ${body.fullName}\nEmail Handle: ${body.email}\n\nProject Scope:\n${body.message}`,
    html: `<p><strong>Sender Name:</strong> ${body.fullName}</p>
           <p><strong>Email Handle:</strong> ${body.email}</p>
           <br><p><strong>Project Scope:</strong></p><p>${body.message}</p>`
  }

  try {
    await sgMail.send(messagePayload)
    return { success: true, message: 'Data transmitted smoothly via SendGrid routing pipeline.' }
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Unable to route transmission payload via external relays.' })
  }
})
