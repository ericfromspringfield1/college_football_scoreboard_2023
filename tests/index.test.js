/** @jest-environment jsdom */
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('index.html structure', () => {
  test('document has head and body nested under html', () => {
    const htmlPath = path.join(__dirname, '..', 'index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');
    const dom = new JSDOM(html);
    const { document } = dom.window;
    expect(document.head).not.toBeNull();
    expect(document.body).not.toBeNull();
    expect(document.head.parentElement).toBe(document.documentElement);
    expect(document.body.parentElement).toBe(document.documentElement);
  });
});


