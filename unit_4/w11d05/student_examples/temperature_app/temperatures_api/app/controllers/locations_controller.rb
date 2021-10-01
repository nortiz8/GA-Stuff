class LocationsController < ApplicationController
  before_action :set_location, only: [:show]

  # GET /locations
  def index
    @locations = Location.all

    render json: @locations.to_json(include: :temperatures)
  end

  # GET /locations/1
  def show
    location_temps = @location.temperatures
    render json: {location: @location, temperatures: location_temps}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = Location.find(params[:id])
    end
end
