from flask import render_template
from flask import Blueprint


frontend_bp =  Blueprint('app', __name__)

@frontend_bp.route('/projects/2')
def home():
    return render_template('index.html') 

@frontend_bp.route('/projects/2/login')
def login():
    return render_template('login.html') 

@frontend_bp.route('/projects/2/map')
def map_page():
    return render_template('map.html') 

@frontend_bp.route('/projects/2/register')
def register():
    return render_template('register.html') 