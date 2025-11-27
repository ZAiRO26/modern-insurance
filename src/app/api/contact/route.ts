import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Simple server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if email configuration is present
    const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env

    if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS) {
      console.warn('Email credentials not found in environment variables. Logging email to console instead.')
      console.log('--- MOCK EMAIL SEND ---')
      console.log('To:', EMAIL_TO || 'admin@catalystmergers.com')
      console.log('From:', email)
      console.log('Subject:', `New Contact Form Submission: ${subject}`)
      console.log('Message Body:')
      console.log(`Name: ${name}`)
      console.log(`Email: ${email}`)
      console.log(`Phone: ${phone}`)
      console.log(`Subject: ${subject}`)
      console.log(`Message: ${message}`)
      console.log('-----------------------')
      
      // Return success for mock mode
      return NextResponse.json({ success: true, message: 'Message logged (Mock Mode)' })
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT) || 587,
      secure: Number(EMAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${EMAIL_USER}>`, // Sender address (often needs to be the authenticated user)
      replyTo: email,
      to: EMAIL_TO || EMAIL_USER, // List of receivers
      subject: `Contact Form: ${subject}`, // Subject line
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
