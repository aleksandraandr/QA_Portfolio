const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    async function waitForSelectors(selectors, frame, timeout) {
      for (const selector of selectors) {
        try {
          return await waitForSelector(selector, frame, timeout);
        } catch (err) {
          console.error(err);
        }
      }
      throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function waitForSelector(selector, frame, timeout) {
      if (selector instanceof Array) {
        let element = null;
        for (const part of selector) {
          if (!element) {
            element = await frame.waitForSelector(part, { timeout });
          } else {
            element = await element.$(part);
          }
          if (!element) {
            throw new Error('Could not find element: ' + part);
          }
          element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        }
        if (!element) {
          throw new Error('Could not find element: ' + selector.join('|'));
        }
        return element;
      }
      const element = await frame.waitForSelector(selector, { timeout });
      if (!element) {
        throw new Error('Could not find element: ' + selector);
      }
      return element;
    }

    async function waitForElement(step, frame, timeout) {
      const count = step.count || 1;
      const operator = step.operator || '>=';
      const comp = {
        '==': (a, b) => a === b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
      };
      const compFn = comp[operator];
      await waitForFunction(async () => {
        const elements = await querySelectorsAll(step.selectors, frame);
        return compFn(elements.length, count);
      }, timeout);
    }

    async function querySelectorsAll(selectors, frame) {
      for (const selector of selectors) {
        const result = await querySelectorAll(selector, frame);
        if (result.length) {
          return result;
        }
      }
      return [];
    }

    async function querySelectorAll(selector, frame) {
      if (selector instanceof Array) {
        let elements = [];
        let i = 0;
        for (const part of selector) {
          if (i === 0) {
            elements = await frame.$$(part);
          } else {
            const tmpElements = elements;
            elements = [];
            for (const el of tmpElements) {
              elements.push(...(await el.$$(part)));
            }
          }
          if (elements.length === 0) {
            return [];
          }
          const tmpElements = [];
          for (const el of elements) {
            const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
            if (newEl) {
              tmpElements.push(newEl);
            }
          }
          elements = tmpElements;
          i++;
        }
        return elements;
      }
      const element = await frame.$$(selector);
      if (!element) {
        throw new Error('Could not find element: ' + selector);
      }
      return element;
    }

    async function waitForFunction(fn, timeout) {
      let isActive = true;
      setTimeout(() => {
        isActive = false;
      }, timeout);
      while (isActive) {
        const result = await fn();
        if (result) {
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timed out');
    }
    {
        const targetPage = page;
        await targetPage.setViewport({"width":679,"height":625})
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto('https://coffee-cart.netlify.app/');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Espresso"],["#app > div:nth-child(3) > ul > li:nth-child(3) > div > div > div.cup-body"]], targetPage, timeout);
        await element.click({ offset: { x: 117.90187072753906, y: 88.28585815429688} });
    }
    {
        const targetPage = page;
        await targetPage.evaluate((x, y) => { window.scroll(x, y); }, 0, 500)
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Cafe Latte"],["#app > div:nth-child(3) > ul > li:nth-child(7) > div > div > div.cup-body"]], targetPage, timeout);
        await element.click({ offset: { x: 117.90187072753906, y: 67.53585815429688} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Cart page"],["#app > ul > li:nth-child(2) > a"]], targetPage, timeout);
        await element.click({ offset: { x: 37.6875, y: 10} });
    }
    {
        const targetPage = page;
        await targetPage.evaluate((x, y) => { window.scroll(x, y); }, 0, 0)
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Remove one Cappucino"],["#app > div.list > div > ul > li:nth-child(3) > div:nth-child(2) > div > button:nth-child(2)"]], targetPage, timeout);
        await element.click({ offset: { x: 7.09375, y: 10.59375} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Proceed to checkout"],["#app > div.list > div > button"]], targetPage, timeout);
        await element.click({ offset: { x: 171, y: 31.921875} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Name"],["#name"]], targetPage, timeout);
        await element.click({ offset: { x: 69.421875, y: 13.921875} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Name"],["#name"]], targetPage, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type('alex');
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "alex");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Email"],["#email"]], targetPage, timeout);
        await element.click({ offset: { x: 65.40625, y: 4.234375} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Email"],["#email"]], targetPage, timeout);
        const type = await element.evaluate(el => el.type);
        if (["textarea","select-one","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type('alex@gmail.com');
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "alex@gmail.com");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Promotion checkbox"],["#promotion"]], targetPage, timeout);
        await element.click({ offset: { x: 9.40625, y: 6.546875} });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Submit"],["#app > div.list > div > div > div > form > div:nth-child(4) > button"]], targetPage, timeout);
        await element.click({ offset: { x: 40.96875, y: 20.859375} });
    }

    await browser.close();
})();
