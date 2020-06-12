import pymongo
import datetime
import random
from dateutil.tz import tzutc

client = pymongo.MongoClient(port=27017)
db = client.UserInfo
user_sample_names = ["test_user_{}".format(i) for i in range(1000)]
product_list = ["product_{}".format(i) for i in range(10)]

def populate_data(data):
	db.UserView.insert_many(data)


def make_data(batch_size):
	dt = datetime.datetime(2019, 1, 1, tzinfo=tzutc())
	end = datetime.datetime(2019, 12, 31, tzinfo=tzutc())
	step = datetime.timedelta(days=random.randrange(5, 10))
	data = []
	while(dt< end):
		sample_data = [{"ViewDate": dt,
				"UserId": random.choice(user_sample_names),
				"ProductId": random.choice(product_list)} for i in range(batch_size)]	    
		dt += step
		data.extend(sample_data)
		print("sample data ",sample_data)
	populate_data(data)

make_data(100)