class SeriesController < ApplicationController
  def index
    @photo_series_list = Series.photo_series_list
    @recording_list = Series.recordings_list
  end

  def show
    @series = Series.find(params[:id])

    @tb_files = Dir.glob(File.join(Rails.root.join("app", "assets", "images", @series.file_path, "thumbnails"), "**", "*.{jpg}"))
  end
end
