class SongsController < ApplicationController

    def index
        render json: { status: 200, songs: Song.all }
    end

    def show
        render json: Song.find(params[:id])
    end

    def create
        song = Song.new(song_params)

        if song.save
            render json: { status: 201, song: song } 
        else
        # Unprocessable Entity
            render json: { status: 422, song: song }
        end
    end

    def update
        song = Song.find(params[:id])
        song.update(song_params)
        render json: { song: song }
    end

    def destroy
        song = Song.destroy(params[:id])
        render json: { status: 204 }
    end

    private # Any methods below here

    def song_params
        # Returns a sanitized hash of the params with nothing extra
        params.required(:song).permit(:title, :artist_name, :artwork)
    end

end