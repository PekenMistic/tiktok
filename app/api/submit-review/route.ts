import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import twilio from 'twilio'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, rating, review } = body

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'panggungsandiwara589@gmail.com',
    subject: 'New Review Submitted',
    text: `Name: ${name}\nEmail: ${email}\nRating: ${rating}\nReview: ${review}`,
  }

  // WhatsApp configuration
  const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

  try {
    // Send email
    await transporter.sendMail(mailOptions)

    // Send WhatsApp message
    await twilioClient.messages.create({
      body: `New Review:\nName: ${name}\nEmail: ${email}\nRating: ${rating}\nReview: ${review}`,
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
      to: 'whatsapp:+6285732474034',
    })

    return NextResponse.json({ message: 'Review submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error submitting review:', error)
    return NextResponse.json({ message: 'Error submitting review' }, { status: 500 })
  }
}