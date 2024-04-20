
function menu() {
    var a = document.getElementById("hambargarmenu");
    a.style.display = "flex";
    a.style.transform = "translateX(-100%)";
    setTimeout(function () {
      a.style.transition = "transform 0.5s ease";
      a.style.transform = "translateX(0)";
    }, 10);
  }
  
  function closemenu() {
    var b = document.getElementById("hambargarmenu");
    b.animate(
      { transform: 'translateX(-100%)' },
      {
        duration: 500,
        fill: 'backwards'
      });
    setTimeout(function () {
      b.style.display = "none";
    }, 500);
  }

// Storing the DIVS
var blog_blogs_main = document.getElementById("blog-blogs-main");
var blog_photographs_main = document.getElementById("blog-photographs-main");
var blog_thoughts_main = document.getElementById("blog-thoughts-main");

// Storing the NAV BAR IDs
var nav_blog = document.getElementById("nav-blog");
var nav_photograph = document.getElementById("nav-photograph");
var nav_thought = document.getElementById("nav-thought");

// Function to underline the clicked navigation item and show the corresponding section
function showSection(section, navItem) {
    // Hide all sections
    blog_blogs_main.style.display = "none";
    blog_blogs_main.style.visibility = "hidden";
    blog_photographs_main.style.display = "none";
    blog_photographs_main.style.visibility = "hidden";
    blog_thoughts_main.style.display = "none";
    blog_thoughts_main.style.visibility = "hidden";

    // Remove underline from all navigation items
    nav_blog.style.textDecoration = "none";
    nav_photograph.style.textDecoration = "none";
    nav_thought.style.textDecoration = "none";

    // Show the selected section
    section.style.display = "flex";
    section.style.visibility = "visible";

    // Underline the clicked navigation item
    navItem.style.textDecoration = "underline";
}

// Initialize by showing the blogs section and underlining the "Blogs" navigation item
showSection(blog_blogs_main, nav_blog);

// Add event listeners to each navigation item
nav_blog.addEventListener("click", function() {
    showSection(blog_blogs_main, nav_blog);
});

nav_photograph.addEventListener("click", function() {
    showSection(blog_photographs_main, nav_photograph);
});

nav_thought.addEventListener("click", function() {
    showSection(blog_thoughts_main, nav_thought);
});
