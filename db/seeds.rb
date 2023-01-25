User.destroy_all
Blog.destroy_all
Comment.destroy_all

cam = User.create(username: "cam", email: "cam@cam.com", password: "123")
puts "🌱 Seeding Users..."
25.times do
    User.create(
        username: Faker::Internet.username,
        email: Faker::Internet.safe_email(name: Faker::Internet.username),
        password: Faker::Internet.password,
    )
end

puts "🌱 Seeding Blogs..."
50.times do
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
end

puts "🌱 Seeding Comments..."
250.times do
    Comment.create(
        body: Faker::Quote.yoda,
        blog: Blog.all.sample,
        user: User.all.sample,
    )
end

puts "🌱 Seeding Likes..."
500.times do
    Bloglike.create(
        liked: [true, false].sample,
        blog: Blog.all.sample,
        user: User.all.sample,
    )
end
500.times do
    Commentlike.create(
        liked: [true, false].sample,
        comment: Comment.all.sample,
        user: User.all.sample,
    )
end

puts "🌱 Seeding Done"