from deepface import DeepFace
result = DeepFace.verify("biden.jpg", "two_people.jpg")
print(result)
