class PhotographyController < ApplicationController
  def index
    @series_list = Series.where(designation: "photo").order(:release)
  end
end
