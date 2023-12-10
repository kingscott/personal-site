module ApplicationHelper
  def when_present(value)
    yield(value) if value.present?
  end
end
