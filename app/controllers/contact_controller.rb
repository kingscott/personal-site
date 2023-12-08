class ContactController < ApplicationController
  def title
    content_for :title, "Contact"
  end
end
