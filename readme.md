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

sudo su -, to switch to root user and give me permissions.

I created a folder called swe642/assignment1. I also uploaded my assignment into github.

so in the assignment1 folder I used the following commands:

# wget https://github.com/Harsha-Udutha/SWE642_Ass1.git

then,  wget https://github.com/Harsha-Udutha/SWE642_Ass1/archive/refs/heads/main.zip to download the assignment.

unzip main.zip command to extract the contents

# cd SWE642_Ass1-main/ used this command to get into the folder

SWE642_Ass1-main  SWE642_Ass1.git  main.zip
[root@ip-172-31-39-60 Assignment1]# cd SWE642_Ass1-main/
[root@ip-172-31-39-60 SWE642_Ass1-main]# ^C
[root@ip-172-31-39-60 SWE642_Ass1-main]# ls
CSinfo.html  DP.png  DP1.png  Home.html  Style.css  Survey.html  darkmode.js  gmu-logo.jpg
[root@ip-172-31-39-60 SWE642_Ass1-main]# 

extracted

