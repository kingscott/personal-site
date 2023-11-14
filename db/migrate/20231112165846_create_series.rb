class CreateSeries < ActiveRecord::Migration[7.1]
  def change
    create_table :series do |t|
      t.string :title
      t.string :author
      t.date :release
      t.string :designation
      t.string :location
      t.string :file_path

      t.timestamps
    end
  end
end
