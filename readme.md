Website Deployment on AWS
here are the steps taken to deploy my website using Amazon Web Services (AWS) with S3 and EC2.

AWS Account Setup
Account Creation: I logged into the AWS login page, created a new account, and provided my credit card details for verification.\

S3 Server Setup:~

Create a Bucket:
In the AWS Management Console, I created a new bucket named harudu.

Upload Files:
I dragged and dropped the necessary files for the website into the bucket.

Enable Static Website Hosting:
Under the Properties tab, I enabled static website hosting, selecting Home.html as the hosting page, and saved the changes.
Set Bucket Policy:

To resolve issues with images not loading, I updated the bucket policy with the following JSON:

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
Access the Website:

I copied the URL https://harudu.s3.us-east-2.amazonaws.com/Assignment1/index.html and verified that everything was functioning correctly.
EC2 Server Setup
Launch an Instance:

I selected EC2 from the AWS services, launched an instance named harudu, and generated a key pair with the default operating system.
Connect to the Instance:

After the instance passed the status checks, I copied the public IP from the EC2 dashboard and connected to the instance using EC2 Instance Connect.
Terminal Access:

Once connected, I switched to the root user for elevated permissions using the command:
bash
Copy code
sudo su -
Folder Creation:

I created a directory for my assignment:
bash
Copy code
mkdir -p /var/www/html/swe642/assignment1
Download Assignment Files:

I uploaded my assignment to GitHub and used the following commands to download and extract it:
bash
Copy code
wget https://github.com/Harsha-Udutha/SWE642_Ass1/archive/refs/heads/main.zip
unzip main.zip
cd SWE642_Ass1-main/
Move Files to Web Directory:

I moved the contents to the web directory:
bash
Copy code
mv * /var/www/html/
Configure Inbound Rules:

In the security settings, I added two new inbound rules for HTTP and HTTPS to allow traffic from anywhere (IPv4).
Access the Website:

I used the public IP of the instance (3.14.3.185) to access the deployed web pages.


Accessing the webpages:

Link 1: Hosted on AWS Linux Cloud using EC2:
IP: 3.14.3.185

Please paste the above IP in the brower's address bar to access the webpages.

Link 2: Hosted on AWS S3:
https://harudu.s3.us-east-2.amazonaws.com/Assignment1/index.html

Please paste the above link in the browser's address bar to access the websites.


For GMU's CS department Page, please scroll down in the student's page, and click on the highlighted CS department link.
For Survey Page, please scroll down in the student's page, and click on the highlighted survey link or please click on the survey button in the CS department page on the top right to the page.

Thankyou!