class MetaController < ApplicationController
    def about
        render json: {author: "President Kool-Chair", last_updated: "10 Jan 2017"}
    end
end