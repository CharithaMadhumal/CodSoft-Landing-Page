const scrollRevealOption ={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
   delay: 500,
});

ScrollReveal().reveal(".header_content .section_description",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header_content .header_btn",{
    ...scrollRevealOption,
   delay: 1500,
});

ScrollReveal().reveal(".banner_card", {
    ...scrollRevealOption,
    interval: 500,
});




ScrollReveal().reveal(".chef_image img",{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".chef_content .section_header",{
    ...scrollRevealOption,
   delay: 500,
});

ScrollReveal().reveal(".chef_content .section_description",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".chef_list li",{
    ...scrollRevealOption,
   delay: 1500,
   interval: 500,
});