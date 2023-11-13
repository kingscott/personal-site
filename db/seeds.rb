# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Seed data for Photo series
series_data = [
  { title: "u00dok_1", author: "Scott King", release: Date.new(2019), designation: "photo", location: "", file_path: "" },
  { title: "Waterloo Regional Space Program", author: "Scott King", release: Date.new(2019), designation: "photo", location: "", file_path: "" },
  { title: "Painting Saskatchewan", author: "Scott King", release: Date.new(2020), designation: "photo", location: "", file_path: "" },
  { title: "British Columbia by Train", author: "Scott King", release: Date.new(2021), designation: "photo", location: "", file_path: "" },
  { title: "Barry Lorne: Symbols", author: "Scott King",  release: Date.new(2021), designation: "photo", location: "", file_path: "" },
  { title: "Barry Lorne: Paintings", author: "Scott King", release: Date.new(2021), designation: "photo", location: "", file_path: "" },
]

begin
  Series.create!(series_data)
rescue ActiveRecord::RecordInvalid => e
  puts "Error creating records: #{e.message}"
end
