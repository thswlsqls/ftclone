const templates = [
    {
        thema: "RESEARCH",
        alt: "thumbs 54 political poll",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1HeM4bwdAkyAG4oIecMk0o/a4d9323c276de120903fa3ecb43fe1f8/thumbs_54_political_poll.jpg",
        title: "Political Survey Template"
    },
    {
        thema: "RESEARCH",
        alt: "thumbs40 market research",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1kBx3LZATueKsWuCGMSS44/fbcf0361c119a8bce96d1b5e771821f9/thumbs40_market_research.jpg",
        title: "Market Research Survey Template"
    },
    {
        thema: "RESEARCH",
        alt: "thumbs46 demographics",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1AC7k4D2M8KyK6G2MIwgow/9d3b779b436600f340892312f4bd3817/thumbs46_demographics.jpg",
        title: "Demographic Survey Questionnaire Template"
    },
    {
        thema: "RESEARCH",
        alt: "thumbs37 brand awareness survey",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1M6al1dTwoW8KWEoq6Syea/6163d7176b20b7a256d8c60a0ae24fdd/thumbs37_brand_awareness_survey.jpg",
        title: "Brand Awareness Survey Template"
    },

    {
        thema: "FEEDBACK",
        alt: "thumbs14 employee evaluation",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/7BZlk4xq1iyiQcGSOUau8C/0e280a0e29c9c89a751180951c2ab33d/thumbs14_employee_evaluation.jpg",
        title: "Employee Evaluation Form Template"
    },
    {
        thema: "FEEDBACK",
        alt: "thumbs34 post event survey",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2PQdmvGPG0MmO44GMKeqIm/7d22eb8c3beb85bab3a17c882732b79c/thumbs34_post_event_survey.jpg",
        title: "Post Event Survey Feedback Template"
    },
    {
        thema: "FEEDBACK",
        alt: "thumbs08 customer feedback",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/5eawAzDUo8yC0m46OSMMc0/f4bb92aecdc15b105054cac337130ee1/thumbs08_customer_feedback.jpg",
        title: "Customer Feedback Form Template"
    },
    {
        thema: "FEEDBACK",
        alt: "thumbs36 product feedback survey",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/5MvsKwnLoWo4SKgy8qQ8gW/4853dcbff23d329af86666a4a1f0b82f/thumbs36_product_feedback_survey.jpg",
        title: "Product Feedback Survey Template"
    },
    {
        thema: "FEEDBACK",
        alt: "thumbs44 employee engagement",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2DQpfLK6DS2OY8oYAu6uqY/b5cfc3fbb140d6765ab84aa2f980e81a/thumbs44_employee_engagement.jpg",
        title: "Employee Engagement Survey Template"
    },
    {
        thema: "FEEDBACK",
        alt: "thumbs16 self evaluation",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4E94bQh4mckG4scs6EokKS/ed761e12833fc15e3c194b12cb30025e/thumbs16_self_evaluation.jpg",
        title: "Self Evaluation Form Template"
    },
    {
        thema: "FEEDBACK",
        alt: "thumbs27 customer-sastifaction",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/7EMJNud2hyYmWAO20C6OO2/624035d2ba9b387fb6a4775dd32e9f62/thumbs27_customer-sastifaction.jpg",
        title: "Customer Satisfaction Survey Template"
    },
    {
        thema: "FEEDBACK",
        alt: "thumbs29 employee sastifaction",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/5igAAXJqrmsCGSuiaOUKEg/8ff4f420b88a318791edac41eb441ca2/thumbs29_employee_sastifaction.jpg",
        title: "Employee Satisfaction Survey Template"
    },
    {
        thema: "FEEDBACK",
        alt: "thumbs32 website feedback",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1EXTO3GLowosqIsASCwmqk/b1a16cef29d7cac04213c87a5322487b/thumbs32_website_feedback.jpg",
        title: "Website Feedback Survey"
    },
    {
        thema: "FEEDBACK",
        alt: "thumbs09 course feedback",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/26b5PvFzv6US8UsU8QCcIk/716a4e4d1989d5564f7e651e85cad0e1/thumbs09_course_feedback.jpg",
        title: "Course Feedback Survey"
    },
    {
        thema: "FEEDBACK",
        alt: "thumbs33 exit survey template",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/3ForaRn7baesaIws24cG2c/5017812e87cb9767d498c0a91f5c7b23/thumbs33_exit_survey_template.jpg",
        title: "Exit Survey Template"
    },
    {
        thema: "FEEDBACK",
        alt: "thumbs43 employee benefits",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/Pioh86at0YiOye8A6kgeU/d1164ee7bb27fb76e7bb7e3942208d17/thumbs43_employee_benefits.jpg",
        title: "Employee Benefits Survey Template"
    },
    {
        thema: "FEEDBACK",
        alt: "thumbs41 candidate experience",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/3BFo5PxIVqU0WsMsQW2s0M/d599478c68dd0cfd7ad15ddac4dceec8/thumbs41_candidate_experience.jpg",
        title: "Candidate Experience Survey Template"
    },
    {
        thema: "REGISTRATION",
        alt: "thumbs01 event registration",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/5jYlODmeKsOWUkMICkY0OA/e76572d47c390c64a15609d55baaefb5/thumbs01_event_registration.jpg",
        title: "Online Event Registration Form Template"
    },
    {
        thema: "REGISTRATION",
        alt: "thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4JnvriZrqFQxvNq1G4XDDw/af6be465d3bb047fa0a003ebde05d0d5/thumbnail.png",
        title: "Engagement Party Invitation"
    },
    {
        thema: "REGISTRATION",
        alt: "thumbs58 party invitation",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/5IsdSHQUxyEy86Cggsykse/156a570bc1b8265ff5771047e274e095/thumbs58_party_invitation.jpg",
        title: "Online Party Invitation Template"
    },
    {
        thema: "REGISTRATION",
        alt: "online registration form",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/3s6dokvzraa0oUEIiCk6aI/e834a3292c716224846f8321c82111a2/thumbs02_simple_registration.jpg",
        title: "Registration Form Template"
    },
    {
        thema: "REGISTRATION",
        alt: "thumbs20 signup sheet template",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1wp3Oomqkwy4a6c22eGCGm/9298cdeeeb8f02070162cf74dc3803cd/thumbs20_signup_sheet_template.jpg",
        title: "Sign Up Sheet Template"
    },
    {
        thema: "APPLICATION",
        alt: "job application form template thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/6u8sZOxrqg4AgAWyemk2Is/3140f1d111d709db37a94ba271ad2e3b/thumbs03_job_application.jpg",
        title: "Job Application Form Template"
    },
    {
        thema: "APPLICATION",
        alt: "thumbs06 rental application",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1Rbc1fVBEwmMkSa8SGwUqg/df203c8b21d394fc10b2e3766835762f/thumbs06_rental_application.jpg",
        title: "Rental Application Form Template"
    },
    {
        thema: "APPLICATION",
        alt: "thumbs05 volunteer application",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2j1F6CK1rOyQUSowisasoI/d623ebba8442ad94505589baaed0e860/thumbs05_volunteer_application.jpg",
        title: "Volunteer Application Form Template"
    },
    {
        thema: "APPLICATION",
        alt: "membership app thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/56deMKOUMPXJnUy652ck1b/dc6c88a298ccf962a041c18ea30cf938/Untitled_design__1_.png",
        title: "Membership Application Form Template"
    },
    {
        thema: "QUIZ",
        alt: "digital marketing quiz",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/12nnFz8we0CKUUceKwAcay/3e7c032f625bb45528beb8f6adc5cc24/digital_marketing_quiz.jpg",
        title: "Digital Marketing Quiz Template"
    },
    {
        thema: "QUIZ",
        alt: "Quick-Start Personality Quiz Thumbnail ",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2URfKMiTmoO0uqIqICEAK4/7be869e7c34be49a1d3a7eb245dae047/thumbs_quickstart_Personality_quiz.jpg",
        title: "Quick-Start Personality Quiz Template"
    },
    {
        thema: "QUIZ",
        alt: "thumbs50 math quiz",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1Ps0CGk6xWwG00U0cqoC2c/e77c4871a9156604d5981d7a2d664c92/thumbs50_math_quiz.jpg",
        title: "Math Quiz Template"
    },
    {
        thema: "QUIZ",
        alt: "thumbs64 avatar creator",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/3R23tNiWBOqQ2yYaCYiEQQ/652bee4aae332d87cac64bc0bb2444c3/thumbs64_avatar_creator.jpg",
        title: "Character Creator Template"
    },
    {
        thema: "QUIZ",
        alt: "thumbs67 interactive fiction",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4oRRmHFpJeWo02KaeUs6EC/a75aab8ad019d500774231ef5ff46277/thumbs67_interactive_fiction.jpg",
        title: "Choose Your Own Adventure Template"
    },
    {
        thema: "GIVEAWAY",
        alt: "thumbs24 facebook lead generation",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2zvNoKiByA8GeYKIQ6M4uK/12985e95bea239146275e10e309c56a5/thumbs24_facebook_lead_generation.jpg",
        title: "Facebook Lead Generation Template"
    },
    {
        thema: "GIVEAWAY",
        alt: "thumbs52 social quizzes",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2C4sTy04J2O24wcowQ2syo/70415e4e340fe276178364a69cbe9c3f/thumbs52_social_quizzes.jpg",
        title: "Social Quiz Template"
    },
    {
        thema: "REQUEST",
        alt: "thumbs 66 faq",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/51992xOxLiKoy0yC0KweSu/b32d7c6ce67f81a5f05347c279d174cd/thumbs_66_faq.jpg",
        title: "FAQ Template"
    },
    {
        thema: "REQUEST",
        alt: "thumbs21 expense reimbursement",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/O05eQGkeIwoEYskYmsOKW/e8fd686b044955c5e8ced1d9aeda6c6d/thumbs21_expense_reimbursement.jpg",
        title: "Expense Reimbursement Form Template"
    },
    {
        thema: "REQUEST",
        alt: "thumbs17 vacation request",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2oD2u4l1WgKYSKaOeGA4ow/0f432be5de6ed874751ce1981631cd13/thumbs17_vacation_request.jpg",
        title: "Vacation Request Form Template"
    },
    {
        thema: "ORDER",
        alt: "thumbs12 t-shirt order",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/5aivdq4MdqUgqI8yaeEE00/5af9b4a81be02ec539538146dfc4541f/thumbs12_t-shirt_order.jpg",
        title: "T-Shirt Order Form Template"
    },
    {
        thema: "ORDER",
        alt: "cake order form template",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/EUt04Pj0dxO1LuGa1c4N1/7b65ceedf77e118d34d2cdbd616388f9/Untitled_design__8_.png",
        title: "Cake Order Form Template"
    },
    {
        thema: "ORDER",
        alt: "thumbs13 online donation",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/6LWtW1nszekwu86u2s2q08/0fa4f1e94798fbf385e14e12d058b6b1/thumbs13_online_donation.jpg",
        title: "Online Donation Form Template"
    },
    {
        thema: "ORDER",
        alt: "thumbs23 sponsorship",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/5ru8dGYM5a2CYYmaEGEWay/404f18d71e57762835bfe4985c0a1305/thumbs23_sponsorship.jpg",
        title: "Sponsorship Form Template"
    },
    {
        thema: "ORDER",
        alt: "thumbs10 photography order",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4Z44bupQxiEiSQ4wgmYaAU/5a872255b4d1526c6662333cd980d46c/thumbs10_photography_order.jpg",
        title: "Photography Booking Form Template"
    },
    {
        thema: "LEAD CAPTURE",
        alt: "Lead Generation Form Thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/3Dfol2K0Igie4RkGSiqoYd/88e19bb0903a9d067191b6912088bb01/Lead_gen_survey_template_thumbnail.png",
        title: "Lead Generation Form Template"
    },
    {
        thema: "LEAD CAPTURE",
        alt: "Get in touch form",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2S5hZbUO7qcHakG1bMPU5H/8ea6ddc8ec6dcdc3194ecb24f8f9bab2/Untitled_design__12_.png",
        title: "Get in touch form template"
    },
    {
        thema: "LEAD CAPTURE",
        alt: "thumbs19 contact form",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2NO8jZHjTaWMgU0mUw2oCs/4743579d9e943902930dfa6ea02dc2b9/thumbs19_contact_form.jpg",
        title: "Online Contact Us Form Template"
    },
    {
        thema: "LEAD CAPTURE",
        alt: "thumbs online quote",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/3vVbAHodxnm8iXTkzuB7GD/aceaebb9bd64564362d88383c5484813/thumbs_online_quote.jpg",
        title: "Online Quote Form Template"
    },
    {
        thema: "LEAD CAPTURE",
        alt: "Product Recommendation Chat Thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1nwoi8DB6fJBK8TVL5HkVF/1407edd3b0ef0261469c01d45cd26965/Screenshot_2021-03-17_at_15.21__1_.png",
        title: "Product Recommendation Chat Template"
    },
    {
        thema: "LEAD CAPTURE",
        alt: "Lead Qualification Chat Thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1lztYmLPdrInf6jucNf7mb/3fb3b2735acaf3c0501904eaf7329fc8/Screenshot_2021-03-17_at_15.20.png",
        title: "Lead Qualification Chat Template"
    },
    {
        thema: "LEAD CAPTURE",
        alt: "Event Registration Chat Thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/65TzMcAbiYueYghxGtlT3e/e3f265654b6d82eb3536d32aea5c2d58/Screenshot_2021-03-17_at_15.21.png",
        title: "Event Registration Chat Template"
    },
    {
        thema: "LEAD CAPTURE",
        alt: "Website Navigation Assistant Chat thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/6U6N7vYQrpGsGDI1Vo6mJQ/bb097b2ee13a99ddad3db7374c620821/Screenshot_2021-03-17_at_15.20_2.png",
        title: "Website Navigation Assistant Chat template"
    },
    {
        thema: "LEAD CAPTURE",
        alt: "thumbs45 brand questionnaire",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/6QoIokYDf2aKeOoIkw6UmG/86fd15a1841ea87679302abdbf14134f/thumbs45_brand_questionnaire.jpg",
        title: "Branding Questionnaire Template"
    },
    {
        thema: "LEAD CAPTURE",
        alt: "Customer information form",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4Q470afEBioms0ACM4UkY2/961c22a9ce778cdcf657dc44de0decbb/Untitled_design__2_-min.png",
        title: "Customer Information Form Template"
    },
    {
        thema: "LEAD CAPTURE",
        alt: "Event_lead_thumb",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/6EtDdfcARqTu8XCjRPZRd8/df8e2ffb49fdea755cd96b0ac5a692ff/event_lead_capture_thumb_public_template_gallery.jpg",
        title: "Event Lead Capture Form Template"
    },
    {
        thema: "LEAD CAPTURE",
        alt: "creative-brief-form-thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4h8yyiuvP81tHv5mXcXvab/871caadc5fefedbb8a59b540c4fdc8c5/Untitled_design__5_.png",
        title: "Creative Brief Template "
    },
    {
        thema: "LEAD CAPTURE",
        alt: "monday.com thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/5OQwdxqTesKyOxt3YUF1kQ/22ac78415c1589f2b8ad416c2d0d6bf6/Untitled_design__11_.png",
        title: "monday.com form template"
    },
    {
        thema: "POLL",
        alt: "thumbs56 facebook poll",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/10wbNoN6PW88cMIMakwaYK/4ff0f066b4c94d05a8ecc2fe43dff90c/thumbs56_facebook_poll.jpg",
        title: "Funny Online Poll Template"
    },
    {
        thema: "POLL",
        alt: "thumbs55 funny poll",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/14tNtdRheIUigeQieYIU4Y/45b406bc4940ebffb83a31df8c2dbf06/thumbs55_funny_poll.jpg",
        title: "Funny Poll Template"
    },
    {
        thema: "POLL",
        alt: "thumbs42 political",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/6w9rso06L6WIq2Q0wEeEOA/faca66bab062566bb21118ddecc0e2a2/thumbs42_political.jpg",
        title: "Political Poll Template"
    },
    {
        thema: "POLL",
        alt: "thumbs57 straw poll",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/DIjKrbogzQkqUEWq2gY0w/9f9bdb30586195261f6ef83f55714653/thumbs57_straw_poll.jpg",
        title: "Straw Poll Template"
    },
    {
        thema: "REPORT",
        alt: "thumbs22 incident report",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1mVSQw9tqc8Om2YUcuqe4G/adc49c0f070fc74dbfc2056224dbdec1/thumbs22_incident_report.jpg",
        title: "Incident Report Form Template"
    },
    {
        thema: "REPORT",
        alt: "troubleshooting-form-thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4BQGkGugkmxH8BXik4E0cx/989d71c5e30db9be78bbec64a0591be5/Untitled_design__7_.png",
        title: "Troubleshooting Form Template"
    },
    {
        thema: "REPORT",
        alt: "thumbs65 personal expense tracker",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4sYVoxvhrOQYsEWG2I0oUq/d41c7e32b6802ee58841412870a4bd06/thumbs65_personal_expense_tracker.jpg",
        title: "Personal Expense Tracker Template"
    },
    {
        thema: "REPORT",
        alt: "thumbs63 activity log",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1hxiWjqzcomq6E4WwcSMWK/adc79b643b13e35d8f8b80a61e539507/thumbs63_activity_log.jpg",
        title: "Activity Log Template"
    },
    {
        thema: "OTHER",
        alt: "Product Research Survey Thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1HnlgDb31HkwTjeEHMcsXZ/adea055e17b9ef3229c2356963a79783/Product_research__survey_template_thumbnail.png",
        title: "Product Research Survey Template"
    },
    {
        thema: "OTHER",
        alt: "Oscars Quiz Thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2CcVKebdr5S2OkpRrChFC3/cb6674b606512a79f9308a95b937311a/Thumbnail.jpg",
        title: "Oscars 2019 Quiz Template"
    },
    {
        thema: "OTHER",
        alt: "Request form thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/54AfuW0zS6PNIuNnlZvEQk/8865566ddecc5ec5d4fda668989dc4bc/Untitled_design__17_.png",
        title: "Request Form Template"
    },
    {
        thema: "OTHER",
        alt: "thumbs61 recipie generator",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/3AO62sz2XekA6MsaikqUMS/bdc4156f418b2fdcd96239b1e8358443/thumbs61_recipie_generator.jpg",
        title: "Recipe Generator Template"
    },
    {
        thema: "OTHER",
        alt: "Subscribe Form Thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1Pqoiggp5Hzndo7LF4U6ls/a5bbecb821616bb47e66b5bf1938d1f0/Untitled_design__2_.png",
        title: "Subscribe Form Template"
    },
    {
        thema: "OTHER",
        alt: "thumbs64 avatar creator",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/3R23tNiWBOqQ2yYaCYiEQQ/652bee4aae332d87cac64bc0bb2444c3/thumbs64_avatar_creator.jpg",
        title: "Online Avatar Creator Template"
    },
    {
        thema: "OTHER",
        alt: "Website feedback questionnaire screenshot",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/6PY5HBXFOQzTWxpeR7Ox52/e5cfee53c6a836d7fe1475ecae55cc0d/Untitled_design__18_.png",
        title: "Website Questionnaire Template"
    },
    {
        thema: "OTHER",
        alt: "thumbs47 vocabulary quiz",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/5Wi9HU3gsMSsyAmYIm02I6/eb0860fb6c00fe305e4efdd7049c25e8/thumbs47_vocabulary_quiz.jpg",
        title: "Vocabulary Quiz Template"
    },
    {
        thema: "OTHER",
        alt: "customer feedback survey",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2gm5apgGc73BhYYEjNo6Tw/7bca7eef7ef4bbf27812496defff0f52/Untitled_design__10_.png",
        title: "Customer Development Survey Template"
    },
    {
        thema: "OTHER",
        alt: "Badge Creator thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/16iDxSDLrZitW0Yb53BruR/6df6f15e509865647f334dfac6fda460/Untitled_design__16_.png",
        title: "Event Badge Creator Template"
    },
    {
        thema: "OTHER",
        alt: "newsletter signup form",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2lxwwccCc7aWAD45tp5ZRZ/d1b7d4aad17c7d703420c7313a59f942/Untitled_design__20_.png",
        title: "Newsletter Signup Form Template"
    },
    {
        thema: "OTHER",
        alt: "Grand Opening Invitation",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4sqE9NM5rVryj5OGaaqHZg/760c69457569c40e7223ca701453df7e/Untitled_design__15_.png",
        title: "Grand Opening Invitation"
    },
    {
        thema: "OTHER",
        alt: "purchase order form template thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4vbpwvbkpAXlKjPEavGTph/cee7aed09446619632aebfcc8b4b933b/Untitled_design__21_.png",
        title: "Purchase Order Form Template"
    },
    {
        thema: "OTHER",
        alt: "Referral Form Thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4q3rYiQCroR4DRmS4uCfP8/f80b06f98eb09d26b937d83b19ca661b/Untitled_design__3_.png",
        title: "Referral Form Template"
    },
    {
        thema: "OTHER",
        alt: "event feedback form thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2f4lcRa9cSR5IRepve4Rin/e106bebb6449ebe409d21cb448309100/Untitled_design__22_.png",
        title: "Event Feedback Form Template"
    },
    {
        thema: "OTHER",
        alt: "RSVP Form Thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1zosilDJ0FuPEiFBFW5sEf/490299a744eee134e0213cf526c61f75/Untitled_design__1_.png",
        title: "RSVP Form"
    },
    {
        thema: "OTHER",
        alt: "thumbs68 elearning course",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2jbFTXNu3WCAgekykUsuQ4/d9ae1a4ff28e493e40534ea9a5a324fd/thumbs68_elearning_course.jpg",
        title: "Online Course Template"
    },
    {
        thema: "OTHER",
        alt: "Happy Holidays eCard Template",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/VKvQWZpDS8OYcSimUgCOq/7e71e1c822f3718fe6e58663678b9680/Untitled_design__2_.jpg",
        title: "Interactive Christmas eCard Template"
    },
    {
        thema: "OTHER",
        alt: "thumbs60 english placement test",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/3IAPwV6UiI8EqGGC02w8Kc/b7a113e54e25e9078ad731186f510c85/thumbs60_english_placement_test.jpg",
        title: "English Placement Test Template"
    },
    {
        thema: "OTHER",
        alt: "thumbs59 wedding invitation",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1IZYVlRj6cAI0SaagyCWy8/0a62d9cfbee6c23982790cb9260c9a94/thumbs59_wedding_invitation.jpg",
        title: "Wedding Invitation Template"
    },
    {
        thema: "OTHER",
        alt: "Online letter to santa",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4RTtdkODuEIo2kSckScOaC/3f5e4b6cfb545ce330735c873a7a3ed5/Untitled_design__3_-min.png",
        title: "Online Letter to Santa Template"
    },
    {
        thema: "OTHER",
        alt: "thumbs49 trivia quiz",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/2UytWTJoTYGkYC6Y64M8UW/c6087f4c1eb365fd0d483a473840799b/thumbs49_trivia_quiz.jpg",
        title: "Trivia Quiz Template"
    },
    {
        thema: "OTHER",
        alt: "Christmas Dinner Planner",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/Zmoyx3HnMaiKQgaUkmcaw/2c243d9486785a7d5d142835117d00d1/Untitled_design__3_.jpg",
        title: "Christmas Dinner Planner Template"
    },
    {
        thema: "OTHER",
        alt: "thumbs15 teacher evaluation",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/5ypqiNVPgcWE8usgMaSyse/42e9bc4a937d2056eddac95813a33544/thumbs15_teacher_evaluation.jpg",
        title: "Teacher Evaluation Form Template"
    },
    {
        thema: "OTHER",
        alt: "Secret Santa Form Thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/W3G5qK6GI0yGiQmmgAiME/c10605d4dbfe5f0091334ddf5be8e75a/Untitled_design-min.png",
        title: "Secret Santa Form Template"
    },
    {
        thema: "OTHER",
        alt: "thumbs30 student sastifaction",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/4YdOA2YCHuYu0SWcoeaKI0/eed615bfdcee1c4ffee0235f372186f6/thumbs30_student_sastifaction.jpg",
        title: "Student Satisfaction Survey Template"
    },
    {
        thema: "OTHER",
        alt: "thumbs53 geographic quiz",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1peNmw0JmgMeeCgWe4QGyI/0adee4ca2fa0d16c001d5f54059f7622/thumbs53_geographic_quiz.jpg",
        title: "Geography Quiz Template"
    },
    {
        thema: "OTHER",
        alt: "thumbs31 job sastifaction",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1AzEkr1UtWc44YuEOQUses/e26a6c44614dd823493c053bc78c7469/thumbs31_job_sastifaction.jpg",
        title: "Job Satisfaction Survey Template"
    },
    {
        thema: "OTHER",
        alt: "thumbs48 science quiz",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/52awBd7e7YY0QU6c2si2Iq/91506715be0ffe3f533a7b1d7a84fff4/thumbs48_science_quiz.jpg",
        title: "Online Science Quiz Template"
    },
    {
        thema: "OTHER",
        alt: "online suggestion box thumbnail",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/7yRzn2hJOXtXQ3YdlPRhkh/862278b1d34f844de6a39c19665f4d37/Untitled_design.png",
        title: "Online Suggestion Box Template"
    },
    {
        thema: "OTHER",
        alt: "thumbs07 360 feedback",
        img: "//images.ctfassets.net/zkqwmjl9nf4n/1XyZbInrOUiaUUUeYQKwGa/c57f68d823118e10618c7706c9fd6d6c/thumbs07_360_feedback.jpg",
        title: "360 Degree Feedback Form Template"
    }
]

export default templates