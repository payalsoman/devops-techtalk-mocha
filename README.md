TechTalk : Mocha
=========================
## Team Memebers
1. Aditya Ambre(abambre)
2. Chetan Pawar(chpawar)
3. Payal Soman(prsoman)
4. Viral Sanghavi(vjsangha)


## High Level Project Report
**What is Mocha?**

- Mocha is the feature-rich Javascript testing framework running on Node.js.
- Relatively new. First stable build released in 2012.
- Simple to setup and is highly extensible.
   (Node Debugger, Reporters etc..)
- Supports assertion libraries like Chai, expect.js and should.js.
- Comparable to Jasmine and QUnit.

**Features :**

| Feature        | Description    |
| :------------- | :------------- |
| Support for multiple assertion libraries |	Mocha supports asserion libraries like Chai,expect.js,should.js , better.js |
| Simple async support, including promises |	Testing asynchronous code with Mocha is quite simpler using done method callback |
| File watcher support |	Mocha can detects changes to the files and can trigger test suit execution.  |
| test-specific timeouts |	Mocha cane provision for suite-level Timeouts (may be applied to entire test "suites") as well as Test-specific timeouts. |
| string diff support |	It can display the difference between what was expected, and what the assertion actually saw. |
| Optionally run tests that match a regexp |	Using --grep option mocha can trigger only run tests matching the given pattern. |
| node debugger support |	Mocha allows integration with node debugging tools like node-inspector. |
| before, after, before each, after each hooks |Mocha provides the hooks before(), after(), beforeEach(), and afterEach(), which can be used to set up preconditions and clean up after your tests. Different types of hooks like root level, test case level provided by mocha. |
| Test coverage reporting |	Mocha can be easily integrated with different coverage tools like lcov, istanbul etc |

**Mocha v/s other testing frameworks**

- Asynchronous testing is fairly easy in Mocha than in Jasmine.
- Jasmine is relatively older and has more support available.
- Configuration for Mocha is a breeze compared to others.
- It is difficult to include assertion libraries in qUnit and Jasmine.

**Limitations**

- It has limited support as compared to Jasmine and qUnit.
- It runs tests sequentially.
- Because mocha provides flexibility, it requires additional analysis to determine which tools to integrate, hence consuming time.


## Setup Instructions
* Clone this repo, run `npm install`.
* Install redis and run on localhost:6379
* To test the sample test case redistest.js we need to run application server, `node main.js`

### Running Tests using Mocha
* To run specific test case use, `mocha test/*`
* To execute all the sample test cases in Test directory use, `mocha`

## Screencast


