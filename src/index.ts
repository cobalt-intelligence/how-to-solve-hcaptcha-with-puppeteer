import puppeteerExtra from 'puppeteer-extra';
import pluginStealth from 'puppeteer-extra-plugin-stealth';
import RecaptchaPlugin from 'puppeteer-extra-plugin-recaptcha';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
    puppeteerExtra.use(pluginStealth());
    puppeteerExtra.use(
        RecaptchaPlugin({
            provider: { id: '2captcha', token: process.env.captchaToken },
            visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
        })
    );

    const browser = await puppeteerExtra
        .launch({
            headless: false
        });

    const url = 'https://fastpeoplesearch.com';

    const page = await browser.newPage();

    await page.goto(url);
    const cloudFlareWrapper = await page.$('#cf-wrapper');
    if (cloudFlareWrapper) {
        await page.waitForSelector('#cf-hcaptcha-container');
        await page.solveRecaptchas();
    }

    await page.waitForTimeout(20000);
    await browser.close();
})();