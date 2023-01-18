User.destroy_all
Blog.destroy_all
Comment.destroy_all

cam = User.create(username: "cam", email: "cam@cam.com", password: "123")

10.times do
    User.create(
        username: Faker::Internet.username,
        email: Faker::Internet.safe_email(name: Faker::Internet.username),
        password: Faker::Internet.password,
    )
end

10.times do
    Blog.create(
        title: Faker::Lorem.sentence(word_count: 3),
        body: Faker::Lorem.paragraph_by_chars(number: 512),
        img:
            Faker::LoremFlickr.image(
                size: "750x250",
                search_terms: ["programming"],
                match_all: false,
            ),
        user: User.all.sample,
    )
    5.times do
        Comment.create(
            body: Faker::Quote.yoda,
            blog: Blog.all.sample,
            user: User.all.sample,
        )
    end
end
