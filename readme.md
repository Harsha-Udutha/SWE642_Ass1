Steps I used to deploy my website in Amazon servers {EC2 and S3}:

I went to the aws login page, created a account and gave in my credit card details.


S3 Server:
in the dashboard, created a new bucket named 'harudu'.
then drag and dropped the files that needed for the websites and uploaded them.
then I eneabled the static website hosting under the properties tab and enabled 'use this bucket to host a website', set home.html as the hosting page. saved these changes.
had to change permissions as images werent loading in the website using this .json text in the Bucket policy.

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::harudu/*"
        }
    ]
}

then copied this url "https://harudu.s3.us-east-2.amazonaws.com/Assignment1/Home.html" and accessed it, everything works.



EC2 server:
slected EC2 in services,
launched an instance, gave it a name 'harudu31'
generated a key pair, with the deafault operating system.
I copied the public ip that was in the details below in the EC2 dashboard.
and then connected to the instance after the status check was done using EC2 instance connect.
after the connection was established i was in the terminal.
then I used these following commands:

sudo su -

