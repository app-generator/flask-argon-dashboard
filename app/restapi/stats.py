# -*- encoding: utf-8 -*-

from flask_restful import Resource
from flask_login   import current_user

from app.models    import Stats

class ApiStats(Resource):

    def get(self,segment):

        if not current_user.is_authenticated:
            return {'err': 'auth'}, 401

        # See the model for details 
        val = Stats( segment ).val 

        if 'traffic' == segment:
            return { segment : val }, 200

        elif 'users' == segment:        
            return { segment : val }, 200

        elif 'sales' == segment:        
            return { segment : val }, 200

        elif 'perf' == segment:        
            return { segment : val }, 200

        else:
            return {'err': 'unknown'}, 404
            
