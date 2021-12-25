# How to log in to hCaptcha with Puppeteer

This walks through using Puppeteer extra with the reCaptcha plugin to solve hCaptcha.

I am using 2Captcha as my solving tool. Here's my [affiliate link](https://2captcha.com?from=7390140).

## Getting Started

Clone the repository and run `npm i`.

You'll need to put your rename `.sample.env` to `.env` and put your captcha API key/token that you received from 2Captcha.

* [Video: How to solve hCaptcha with Puppeteer](https://youtu.be/MKiCVRHeSHg)

### Prerequisites

Tested on Node v14.17.5 and NPM v6.14.14.

### Installing

After installing [NodeJS](https://nodejs.org/en/) you should be able to just run the following in the terminal.

```
npm i
```

## Built With

* [NodeJS](https://nodejs.org/en/) - NodeJS
* [puppeteer](https://github.com/puppeteer/puppeteer) - Headless browser
* [puppeteer-extra](https://github.com/berstend/puppeteer-extra) - Amazing package for extra puppeteer plugins
* [puppeteer-recaptcha](https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-recaptcha) - For solving reCaptcha

## Authors

* **Jordan Hansen** - *Initial work* - [Jordan Hansen](https://github.com/aarmora)


## License

This project is licensed under the ISC License
