## Dev (Local)
1) To pre populate the data run following:
` pip3 install -r requirement.text`
` python3 populate_data.py`
2) To run local server:
`npm install`
`npm run local`
3) curl where product_2  is product id of required product
   allowed params {show_by: month or week or year]};
   or {start_date:"23-10-2020" & end_date: 24-10-2020"}
`example curl --location --request GET 'http://localhost:5373/data/product_2/reports/?show_by=month' \`
