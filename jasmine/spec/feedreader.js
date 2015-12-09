/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This is the first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* It tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         There is 1 failure coming up about RSS Feeds are defined.
         Excepted 0 not to be 0.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Here is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* Here is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Names are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.length).not.toBe(0);
            });
        });
    });


    /* The test suite "The menu" */
    describe('The Menu', function() {
        /* Here is a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        /* Here is a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * has two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('visibility is changed', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* Here a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has at least a single entry element', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });


    /* Here is a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* Here is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var beforeClicked;
        beforeEach(function(done) {
            loadFeed(0, function() {
                beforeClicked = $('.entry > h2').first().text();
                loadFeed(1,done);
            });
        });


        it('changes the content', function(done) {
            expect($('.entry > h2').first().text()).not.toBe(beforeClicked);
            console.log(beforeClicked);
            done();
        });

    });
}());
