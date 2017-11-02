# comic-book

My app was to be a reference guide for fans of the comic book, Saga. Having started in 2012, it is a long running book with
an ongoing plot and thus a reference guide woudld be quite helpful. 

User Story:
Mike is a fan of Saga. With a new issue coming soon after a six month hiatus, Mike wishes to refresh his memory via images and
small blurbs of key plot points. He clicks on the image of a previous volume and sees the covers of the individual issues 
contained within said volume. He would also like to add his own personal thoughts via the reviews feature.

Unfortunately during development, I encountered...

Struggles: I had major issues using the Comicvine API. When I used a fetch request, the response was an error stating
that Cross-Origin Resource Sharing (CORS) access isn't allowed. The fetch request had to be attached to a controller in order
for its origin point to be the server.

I also attempted to use the Goodreads API, which requires registration in order to obtain a public and a secret API key.
I meant to test out the API using the keys unencrypted and hide them later. Unfortunately I committed to GitHub with both keys
visible.

I messed up when coding and had to revert to a previous Git commit. Once I reverted, I realized that I had to go back yet another commit. In the end, I was able to continue, but it took some fandangling in Git.
