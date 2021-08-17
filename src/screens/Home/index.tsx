import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";

import { useAuth } from "../../hooks/auth";
import { classroomApi } from "../../services/classroomApi";

import { styles } from "./styles";

async function listCourses(token: string) {
	classroomApi.defaults.headers.authorization = `Bearer ${token}`;
	const res = await classroomApi.get('/v1/courses');
	return res.data.courses;
}

type CourseData = {
	name: string,
	id: string
}

export function Home () {
    const { user } = useAuth();
	const [items, setItems] = useState<CourseData[]>([]);
        
	useEffect(() => {
		async function getItems() {
			try {
				let course = new Array<CourseData>(); 
				const data = await listCourses(user.token);
				for (let i=0;i<data.length;i++) {
					const list = JSON.parse(JSON.stringify(data[i]));
					//if (i === 0)
					//	console.log(list);
					course.push({ 
						name: list.name,
						id: list.id
					});
				}
				setItems(course);
			} catch (error) {
				//console.log(error.response);
				alert("Ocorreu um erro ao buscar os items " + error +
					" - " + error.response.data.error.message);
			}
		}
		getItems();
	}, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
				keyExtractor={course => course.id}
                renderItem={({item}) => {
                    return (
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert(`${item.id}`)}
						>
							<View>
								<Text style={styles.listItem}>
										{item.name}
								</Text>
							</View>
						</TouchableHighlight>
                    );    
                }}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={styles.itemSeparator} /> 
                    )
                }}
            />
        </View>

    );
}