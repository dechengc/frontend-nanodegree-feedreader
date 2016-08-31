
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });



         it('URL is defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });

         it('name is defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    describe('The menu', function() {



         it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
         });

          it('changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').click();
            expect($( 'body' ).hasClass( 'menu-hidden' )).toEqual(false);
            $('.menu-icon-link').click();
            expect($( 'body' ).hasClass( 'menu-hidden' )).toEqual(true);
          });
    });

    describe('Initial Entries', function() {



         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
         });
         it('ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container', function() {
            expect($('.feed .entry').children().length).not.toBe(0);

         });
    });
    describe('New Feed Selection' , function() {


        var oldEntry;
        var newEntry;

        /* Before each of the test functions are called, it loads the old entry
         * and new entry.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldEntry = $('.feed').html();
                loadFeed(1, function() {
                    newEntry = $('.feed').html();
                    done();
                });
            });

        });

        it('ensures when a new feed is loaded by the loadFeed function that the content actually changes', function() {

                expect(oldEntry !== newEntry).toEqual(true);


        });
    });
}());
