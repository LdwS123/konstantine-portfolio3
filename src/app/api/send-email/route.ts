import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Here you would typically use an email service like SendGrid, AWS SES, etc.
    // For now, we'll just forward it to your email
    const emailData = {
      to: "kgugunava2001@berkeley.edu", // Your email address
      from: email,
      subject: `New message from ${name} via Portfolio`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    }

    // For demonstration, we'll just log it
    console.log('Email would be sent:', emailData)

    // In production, you would send the email here
    // await sendEmail(emailData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 