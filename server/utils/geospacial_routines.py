import geopandas as gpd
from shapely.geometry import Polygon,Point
from utils.lambert import Lambert
from config.config import a,f_inv,phi_1,phi_2,phi_F,lambda_F,E_F,N_F

mapa = gpd.read_file("./data_veg/conjunto_de_datos/cdv_usuev250sVII_cnal.shp")

lamb = Lambert(
    standard_parallels=(phi_1, phi_2),
    central_latitude=phi_F, central_longitude=lambda_F,
    false_easting=E_F, false_northing=N_F,
    semimajor_axis = a, inverse_flattening = f_inv
)

def obtain_description_by_polygon(polygon_land):
    max_intersection_area = 0.0
    k = 0
    for i in range(len(mapa)):
        reg = mapa.geometry[i]
        intersection = reg.intersection(polygon_land)
        if intersection.area > max_intersection_area:
            max_intersection_area = intersection.area
            k = i
    return mapa.DESCRIPCIO[k]

def obtain_description_by_point(latitude,longitude):
    x,y = lamb.geographic2cartesian(latitude,longitude)
    p = Point(x,y)
    for i in range(len(mapa)):
        reg = mapa.geometry[i]
        if p.within(reg):
            return mapa.DESCRIPCIO[i]

def coor2prj(coord):
    lat,lon = coord
    x, y = lamb.geographic2cartesian(lat, lon)
    return x,y
    
def create_polygon_from_coords(lat_point_list,lon_point_list):
    coords = map(coor2prj,zip(lon_point_list, lat_point_list))
    polygon_geom = Polygon(coords)
    return polygon_geom
        