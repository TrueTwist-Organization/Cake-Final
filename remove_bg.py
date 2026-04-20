from PIL import Image
import os

input_path = r"c:\Users\hp\Desktop\CAKE\images\Cupcakes\Caramel Macchiato Cupcakes\Toffee.jpeg"
output_path = r"c:\Users\hp\Desktop\CAKE\images\Cupcakes\Caramel Macchiato Cupcakes\Toffee.png"

def make_transparent(input_file, output_file, threshold=240):
    img = Image.open(input_file)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # If pixel is somewhat white
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_file, "PNG")
    print(f"Saved transparent image to {output_file}")

make_transparent(input_path, output_path)
