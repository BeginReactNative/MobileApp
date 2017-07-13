import React, { Component } from 'react';
import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import {Button} from 'native-base';

class Join extends Component {
    render() {
        
        return (
            
                <View style={{ flex: 1,justifyContent:'space-between',alignItems:'center' }}>
                    <View style={{ margin: 10, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Xin cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi!</Text>
                        <Text>Quý khách hoàn thành việc thanh toán theo 2 bước:</Text>
                        <Text>Bước 1: Nộp tiền theo 1 trong 2 cách</Text>
                        <Text>    Cách 1: Chuyển khoản</Text>
                        <Text>     - STK : 19028624979012</Text>
                        <Text>     - Chủ TK : Vũ Thị Hồng</Text>
                        <Text>     - Ngân hàng: Techcombank Hoàng Quốc Việt</Text>
                        <Text>    Cách 2: Thanh toán bằng tiền mặt tại văn phòng Hola - Phòng 18.01, tòa nhà vimeco 2, Nguyễn Chánh, Cầu Giấy.</Text>
                        <Text>Bước 2: Điền thông tin khách hàng:</Text>
                        <Text>  Sau khi làm các thủ tục thanh toán, quý khách vui lòng điền đầy đủ các thông tin dưới đây. Mã kích hoạt sẽ được gửi vào email cho </Text>
                    </View>

                    <View>
                    <TextInput
                        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                        editable={true}
                        maxLength={40}
                    />
                        <TextInput />
                        <TextInput />
                    </View>

                    <View style={{marginBottom: 20}}>
                            <Button primary onPress={() => this.props.navigation.goBack()}>
                                <Text>CANCELED</Text>
                            </Button>
                    </View>
                   

                </View>
             
        );
    }
}

export default Join;