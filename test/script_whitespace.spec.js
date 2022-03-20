import debugFunc from 'debug'
const debug = debugFunc('lexing-transformer:test')
import { simpleProjectRootDir } from '@foo-dog/utils'

import { tap, testString } from "./fixture.js"

tap.test('script whitespace', t => {
  testString(
`script.
  if (foo) {
    
    bar();
    
  }`, [{
    "source": simpleProjectRootDir()+"/test",
    "name": "script",
    "type": "tag",
    "lineNumber": 1,
    "children": [{
      "source": simpleProjectRootDir()+"/test",
      "type": "text",
      "val": "if (foo) {",
      "lineNumber": 2,
      "children": [{
        "source": simpleProjectRootDir()+"/test",
        "type": "text",
        "val": "bar();",
        "lineNumber": 4,
      }],
    }, {
      "source": simpleProjectRootDir()+"/test",
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
      "source": simpleProjectRootDir()+"/test",
      "type": "append",
      "val": "head",
      "lineNumber": 1,
      "children": [
        {
          "source": simpleProjectRootDir()+"/test",
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
              "source": simpleProjectRootDir()+"/test",
              "type": "text",
              "val": "{",
              "lineNumber": 3,
              "children": [
                {
                  "source": simpleProjectRootDir()+"/test",
                  "type": "text",
                  "val": "\"@context\": \"https://schema.org\",",
                  "lineNumber": 4,
                },
                {
                  "source": simpleProjectRootDir()+"/test",
                  "type": "text",
                  "val": "\"@type\": \"NewsArticle\",",
                  "lineNumber": 5,
                },
                {
                  "source": simpleProjectRootDir()+"/test",
                  "type": "text",
                  "val": "\"headline\": \"Recruiter Tips\",",
                  "lineNumber": 6,
                },
                {
                  "source": simpleProjectRootDir()+"/test",
                  "type": "text",
                  "val": "\"image\": [",
                  "lineNumber": 7,
                  "children": [
                    {
                      "source": simpleProjectRootDir()+"/test",
                      "type": "text",
                      "val": "\"/src/img/recruiter_ohio.png\"",
                      "lineNumber": 8,
                    },
                    {
                      "source": simpleProjectRootDir()+"/test",
                      "type": "text",
                      "val": "],",
                      "lineNumber": 9,
                    },
                  ],
                },
                {
                  "source": simpleProjectRootDir()+"/test",
                  "type": "text",
                  "val": "\"datePublished\": \"2021-10-14T00:00:00+008:00\",",
                  "lineNumber": 10,
                },
                {
                  "source": simpleProjectRootDir()+"/test",
                  "type": "text",
                  "val": "\"dateModified\": \"2021-10-14T00:00:00+008:00\",",
                  "lineNumber": 11,
                },
                {
                  "source": simpleProjectRootDir()+"/test",
                  "type": "text",
                  "val": "\"author\": [{",
                  "lineNumber": 12,
                  "children": [
                    {
                      "source": simpleProjectRootDir()+"/test",
                      "type": "text",
                      "val": "\"@type\": \"Person\",",
                      "lineNumber": 13,
                    },
                    {
                      "source": simpleProjectRootDir()+"/test",
                      "type": "text",
                      "val": "\"name\": \"Adam Koch\",",
                      "lineNumber": 14,
                    },
                    {
                      "source": simpleProjectRootDir()+"/test",
                      "type": "text",
                      "val": "\"url\": \"https://www.adamkoch.com/\"",
                      "lineNumber": 15,
                    },
                  ],
                },
                {
                  "source": simpleProjectRootDir()+"/test",
                  "type": "text",
                  "val": "}]",
                  "lineNumber": 16,
                },
              ],
            },
            {
              "source": simpleProjectRootDir()+"/test",
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