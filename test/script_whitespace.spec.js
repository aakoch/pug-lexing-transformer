import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:test')

import { tap, testString } from "./fixture.js"

tap.test('script whitespace', t => {
  testString(
`script.
  if (foo) {
    
    bar();
    
  }`, [{
    "source": "test",
    "name": "script",
    "type": "tag",
    "lineNumber": 1,
    "children": [{
      "source": "test",
      "type": "text",
      "val": "if (foo) {",
      "lineNumber": 2,
      "children": [{
        "source": "test",
        "type": "text",
        "val": "bar();",
        "lineNumber": 4,
      }],
    }, {
      "source": "test",
      "type": "text",
      "val": "}",
      "lineNumber": 6,
    }],
  }], t)

})

tap.test('script whitespace with dedent', t => {
  testString(
    `append head
  script(type="application/ld+json").
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "Recruiter Tips",
      "image": [
        "/src/img/recruiter_ohio.png"
        ],
      "datePublished": "2021-10-14T00:00:00+008:00",
      "dateModified": "2021-10-14T00:00:00+008:00",
      "author": [{
        "@type": "Person",
        "name": "Adam Koch",
        "url": "https://www.adamkoch.com/"
      }]
    }`, 
    [
      {
      "source": "test",
      "type": "append",
      "val": "head",
      "lineNumber": 1,
      "children": [
        {
          "source": "test",
          "name": "script",
          "type": "tag",
          "attrs": [
            {
              "name": "type",
              "val": "\"application/ld+json\"",
            },
          ],
          "lineNumber": 2,
          "children": [
            {
              "source": "test",
              "type": "text",
              "val": "{",
              "lineNumber": 3,
              "children": [
                {
                  "source": "test",
                  "type": "text",
                  "val": "\"@context\": \"https://schema.org\",",
                  "lineNumber": 4,
                },
                {
                  "source": "test",
                  "type": "text",
                  "val": "\"@type\": \"NewsArticle\",",
                  "lineNumber": 5,
                },
                {
                  "source": "test",
                  "type": "text",
                  "val": "\"headline\": \"Recruiter Tips\",",
                  "lineNumber": 6,
                },
                {
                  "source": "test",
                  "type": "text",
                  "val": "\"image\": [",
                  "lineNumber": 7,
                  "children": [
                    {
                      "source": "test",
                      "type": "text",
                      "val": "\"/src/img/recruiter_ohio.png\"",
                      "lineNumber": 8,
                    },
                    {
                      "source": "test",
                      "type": "text",
                      "val": "],",
                      "lineNumber": 9,
                    },
                  ],
                },
                {
                  "source": "test",
                  "type": "text",
                  "val": "\"datePublished\": \"2021-10-14T00:00:00+008:00\",",
                  "lineNumber": 10,
                },
                {
                  "source": "test",
                  "type": "text",
                  "val": "\"dateModified\": \"2021-10-14T00:00:00+008:00\",",
                  "lineNumber": 11,
                },
                {
                  "source": "test",
                  "type": "text",
                  "val": "\"author\": [{",
                  "lineNumber": 12,
                  "children": [
                    {
                      "source": "test",
                      "type": "text",
                      "val": "\"@type\": \"Person\",",
                      "lineNumber": 13,
                    },
                    {
                      "source": "test",
                      "type": "text",
                      "val": "\"name\": \"Adam Koch\",",
                      "lineNumber": 14,
                    },
                    {
                      "source": "test",
                      "type": "text",
                      "val": "\"url\": \"https://www.adamkoch.com/\"",
                      "lineNumber": 15,
                    },
                  ],
                },
                {
                  "source": "test",
                  "type": "text",
                  "val": "}]",
                  "lineNumber": 16,
                },
              ],
            },
            {
              "source": "test",
              "type": "text",
              "val": "}",
              "lineNumber": 17,
            },
          ],
        },
      ],
      },
    ]
    , t)
  })