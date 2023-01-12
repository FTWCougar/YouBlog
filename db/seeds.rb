cam =
    User.create(
        username: "cam",
        email: "cam@cam.com",
        password: "123",
        password_confirmation: "123",
    )

10.times do
    Blog.create(
        title: Faker::Lorem.sentence(word_count: 3),
        body: Faker::Lorem.paragraphs(number: 5),
        img:
            Faker::LoremFlickr.image(size: "250x250", search_terms: ["programming"]),
        user_id: cam.id,
    )
end
