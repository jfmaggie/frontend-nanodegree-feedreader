# Project Overview

In this project I was given a web-based application that reads RSS feeds. I wrote some test suites for the application with [Jasmine](http://jasmine.github.io/);

Open the index page and wait for a few seconds after the contents change all the tests should pass.  

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.


## What have I learned?

I learned how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


# How will I complete this project?

1. :heavy_check_mark: Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. :heavy_check_mark: Review the functionality of the application within your browser.
3. :heavy_check_mark: Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
4. :heavy_check_mark: Explore the Jasmine spec file in *./jasmine/spec/feedreader.js*
5. :heavy_check_mark: Edit the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in your application.
6. :heavy_check_mark: Return the allFeeds variable to a passing state.
7. :heavy_check_mark: Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
8. :heavy_check_mark: Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
9. :heavy_check_mark: Write a new test suite named "The menu".
10. :heavy_check_mark: Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
11. :heavy_check_mark: Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
12. :heavy_check_mark: Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
13. :heavy_check_mark: Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
14. :heavy_check_mark: When complete - all of your tests should pass.
