class CreateSeries < ActiveRecord::Migration[7.1]
  def up
    create_table :series, if_not_exists: true do |t|
      t.string :title
      t.string :author
      t.date :release
      t.string :designation
      t.string :location
      t.string :file_path

      t.timestamps
    end
  end

  def down
    drop_table :series
  end
end
