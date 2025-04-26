---
title: Creating an SSL certificate with Let's Encrypt
excerpt: This guide outlines the process of setting up Let’s Encrypt SSL certificates on a Linux web server. It covers installing Certbot, obtaining SSL certificates, configuring the web server (Apache or Nginx), and automating certificate renewal.
publishDate: 'Sept 5 2024'
tags:
  - Guide
seo:
  image:
    src: '/post-1.jpg'
    alt: Computer with sublime text open on-screen.
---
A Step-by-Step Guide to Setting Up Let's Encrypt SSL Certificate on a Linux Web Server e.g. AWS

In today's digital landscape, ensuring the security of your website is paramount. One fundamental aspect of website security is the implementation of SSL/TLS certificates, which encrypt the data exchanged between a web server and a user's browser. Let's Encrypt, a free and automated certificate authority, has simplified the process of obtaining and installing SSL certificates. In this guide, we'll walk through the steps to set up Let's Encrypt SSL certificates on a Linux web server.

## Prerequisites:
- A Linux-based web server (e.g., Amazon Linux, Ubuntu, CentOS)
- Access to the server via SSH
- A domain name pointed to your server's IP address

### Step 1: Install Certbot
Certbot is a command-line tool that simplifies the process of obtaining and renewing SSL certificates from Let's Encrypt. Install Certbot on your server using the package manager specific to your Linux distribution. For example, on Ubuntu, you can install Certbot with the following command:

```bash
sudo apt-get update
sudo apt-get install certbot
certbot --version
```

And on AWS Linux:

```bash
sudo yum update
sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo yum-config-manager --enable epel
sudo yum install certbot python3-certbot-nginx
certbot --version
```

If certbot is correctly installed then you should see a version number.

## Step 2: Obtain SSL Certificate
Once Certbot is installed, use it to obtain an SSL certificate for your domain. Run the following command, replacing `example.com` with your domain:

```
sudo certbot certonly --webroot -w /var/www/html -d example.com -d www.example.com
```

This command tells Certbot to use the webroot plugin to verify domain ownership and issue a certificate for `example.com` and `www.example.com`. Adjust the webroot path (`/var/www/html`) according to your server's configuration.

### Step 3: Configure Web Server
Next, configure your web server to use the SSL certificate. The exact steps vary depending on the web server software you're using. Below are instructions for Apache and Nginx:

#### Apache:
Edit your virtual host configuration file (`/etc/apache2/sites-available/example.com.conf`) and add the following lines within the `<VirtualHost>` block:

```
SSLCertificateFile /etc/letsencrypt/live/example.com/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/example.com/privkey.pem
```

Then, enable the SSL module and restart Apache:

```
sudo a2enmod ssl
sudo systemctl restart apache2
```

#### Nginx:
Edit your server block configuration file (`/etc/nginx/sites-available/example.com`) and add the following lines within the `server` block:

```
ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
```

Then, test the Nginx configuration and reload Nginx:

```
sudo nginx -t
sudo systemctl reload nginx
```

### Step 4: Automate Certificate Renewal
Let's Encrypt SSL certificates expire after 90 days. Automate the renewal process by creating a cron job that runs the Certbot renew command. Open the crontab editor:

```
sudo crontab -e
```

Add the following line to the crontab file to renew the certificate twice a day:

```
0 */12 * * * certbot renew --quiet
```

Save and exit the crontab editor.

### Conclusion
By following these steps, you've successfully set up Let's Encrypt SSL certificates on your Linux web server, ensuring secure communication between your website and its visitors. Regularly monitor the certificate expiration dates and renew them as needed to maintain a secure web presence. With SSL encryption in place, your users can browse your website with confidence, knowing that their data is protected.