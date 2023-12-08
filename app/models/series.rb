class Series < ApplicationRecord
  def self.photo_series_list
    @photo_series_list = Series.where(designation: "photo").order(:release)
  end

  def self.recordings_list
    @recordings_list = Series.where(designation: "recording").order(:release)
  end

  def self.print_list
    @print_list = Series.where(designation: "print").order(:release)
  end

  # @return [Boolean]
  def photo?
    designation == "photo"
  end
end
