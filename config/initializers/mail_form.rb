ActionMailer::Base.include(MailForm::Delivery)

MailForm::Base.delivery_method = :smtp
MailForm::Base.smtp_settings = {
  address: "smtp.gmail.com", # Replace with your SMTP server address
  port: 587, # Replace with the appropriate port number
  domain: "gmail.com", # Replace with your domain name
  user_name: "Mwaura Frankiline", # Replace with your SMTP username
  password: "jamuh6211", # Replace with your SMTP password
  authentication: "plain",
  enable_starttls_auto: true
}
