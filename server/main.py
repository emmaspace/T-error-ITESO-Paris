from flask import jsonify
from flask_expects_json import expects_json
from jsonschema.exceptions import ValidationError
from flask.helpers import make_response
from schema import DataForestProject
from workflow import steps_elegibility, carbon_capture

@expects_json(DataForestProject.data_validation)
def ejecuta_elegibilidad(request):
    result = steps_elegibility.steps_elegibility(request.get_json())
    return result

def error_schema(error):
    try:
        if isinstance(error.description, ValidationError):
            original_error = error.description
            return make_response(jsonify({'code': 400, 'message': str(list(map(lambda x:str(x),original_error.absolute_path))) +' '+original_error.message}), 400)
        # handle other "Bad Request"-errors
    except Exception as ex:
        return make_response(jsonify({'code': 500, 'message': str(error)}), 500)
    
def rutina_elegibilidad(request):
    try:
        return ejecuta_elegibilidad(request)
    except Exception as error:
        return error_schema(error)