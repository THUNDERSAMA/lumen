from deepface import DeepFace
result = DeepFace.verify(original_path = "biden.jpg", imageToverify = "two_people.jpg")
print(result)
